module.exports = {
	departmentNameToAbbr: require('./mappings/to_department_abbreviations.json'),
	departmentAbbrToName: require('./mappings/to_department_names.json'),
	gereqTitleToAbbr: require('./mappings/to_gereq_abbreviations.json'),
	valid: {
		departments: require('./mappings/valid_departments.json'),
		gereqs: require('./mappings/valid_gereqs.json'),
		locations: require('./mappings/valid_locations.json'),
		professors: require('./mappings/valid_professors.json'),
		times: require('./mappings/valid_times.json'),
		types: require('./mappings/valid_types.json'),
	},
}
