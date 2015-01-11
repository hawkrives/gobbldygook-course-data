module.exports = {
	departmentNameToAbbr: require('./handmade/to_department_abbreviations.json'),
	departmentAbbrToName: require('./handmade/to_department_names.json'),
	gereqTitleToAbbr: require('./handmade/to_gereq_abbreviations.json'),
	valid: {
		departments: require('./generated/valid_departments.json'),
		gereqs: require('./generated/valid_gereqs.json'),
		locations: require('./generated/valid_locations.json'),
		professors: require('./generated/valid_professors.json'),
		times: require('./generated/valid_times.json'),
		types: require('./generated/valid_types.json'),
	},
}
