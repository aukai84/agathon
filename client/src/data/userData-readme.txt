SCHEMA:
"user": username,
"data": {
    form-uid: { ---> IF NO FORM_UID, then no entries submitted...log is blank by default.
        "entries": [ array of each entry object { field-value pairs}],
        "filters": {
                "filter-key": which field to apply filter,
                "values": [array of acceptable filter values]
            }
    }
}


uid 1: simply load info into table.
uid 2: notice 3 different 'type-of-produce'. Make a filter using filters object so you can easily view information about 1 specific produce.
    Filter-key tells you which field to filter by, (hardcoded)
    values: tells you acceptable filter values, (hardcoded)
uid 3: purposefully not in entry. Lets make this red in the UI, and then the log can show 'YOU HAVE NO ENTRIES, YET...' to show this feature.
