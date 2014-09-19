Gobbldygook Course Data
=======================

This repository holds the data for Gobbldygook in both raw (XML) and proccessed (JSON) forms. You do not need this repository if your are only interested in using Gobbldygook; it includes this as a submodule.


## What changes? ##

- Unescape \&amp; in `coursename` (also remap to `name`)
- Map `coursesection` to `sect`
- Remove `<br>` tags from `notes`
- Remove `coursestatus`
- Remove `varcredits`
    – no idea what it does; it's been "N" for every single course in the database
- Expand `courseubtype` and map to `type`
    - f. ex., `R` becomes `Research`
- Departments becomes a list
- Turn the *really long number strings* into actual numbers
    - `clbid` becomes an int
    - `coursenumber` maps to `num` and becomes an int
    - `credits` becomes a float
    - `crsid` becomes an int
    - `groupid` becomes an int
- Turn booleans into booleans
  - namely `pn` maps to `pf` and becomes True or False, instead of Y or N.
- Embed the term, year, and semester
- Embed the course level (first digit of the number)
- Map `meetinglocations` to `places`
- Map `meetingtimes` to `times`
- Map `instructors` to `profs`
  - `profs` change to "First Last", instead of "Last, First" (and become a list)
- Get the GE Reqs as a list (and without the links)
- Same with `places`
- Change `times` to a list


## getData.py ##

Before using this script, you'll need a some other libraries:

- Python 3.4 or greater (3.x might work, but I haven't tested)
- beautifulsoup4
- requests
- xmltodict

so a `pip3 install beautifulsoup4 requests xmltodict` should do it.

As an additional note, I *highly* reccommend using [Homebrew](http://brew.sh) to install/update Python. 


### Usage ###

`python3 getData.py --years 1994 1995 --terms 20141`

Simply calling `python3 getData.py` will run it on every term from 19941 to the current year.

- The `--years` argument will run it on all five terms for the given years.
- The `--terms` argument will run it on any given terms.
- The `--force` or `-f` argument will force it to update from the server – not ideal, generally, and only to be used when the data needs to be updated.
