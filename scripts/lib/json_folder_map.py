from collections import OrderedDict
import hashlib
import json
import os

from .parse_year_from_filename import parse_year_from_filename
from .log import log


def json_folder_map(folder, kind, path, dry_run=False):
    output = {
        'files': [],
        'type': kind
    }

    files = os.listdir(folder)
    for filename in files:
        if filename == '.DS_Store':
            continue

        filepath = folder + '/' + filename
        with open(filepath, 'rb') as infile:
            info = {
                'path': 'terms/' + filename,
                'hash': hashlib.sha1(infile.read()).hexdigest(),
                'year': parse_year_from_filename(filename)
            }
            output['files'].append(OrderedDict(sorted(info.items())))

    output['files'] = sorted(output['files'], key=lambda item: item['path'])

    output = OrderedDict(sorted(output.items()))

    log('Hashed files')
    if not dry_run:
        info_path = path + 'info.json'
        with open(info_path, 'w') as outfile:
            outfile.write(json.dumps(output,
                                     indent='\t',
                                     separators=(',', ': ')))
            outfile.write('\n')
            log('Wrote info.json to', info_path)
