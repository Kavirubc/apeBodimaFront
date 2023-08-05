import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
    const [value, setValue] = React.useState(null);

    return (
        <Autocomplete
            value={value}
            onChange={(event, newValue) => {
                if (typeof newValue === 'string') {
                    setValue({
                        title: newValue,
                    });
                } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setValue({
                        title: newValue.inputValue,
                    });
                } else {
                    setValue(newValue);
                }
            }}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const { inputValue } = params;
                // Suggest the creation of a new value
                const isExisting = options.some((option) => inputValue === option.title);
                if (inputValue !== '' && !isExisting) {
                    filtered.push({
                        inputValue,
                        title: `Add "${inputValue}"`,
                    });
                }

                return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={top100Films}
            getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === 'string') {
                    return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                    return option.inputValue;
                }
                // Regular option
                return option.title;
            }}
            renderOption={(props, option) => <li {...props}>{option.title}</li>}
            sx={{ width: 750}}
            freeSolo
            renderInput={(params) => (
                <TextField {...params} label="Enter University or Town" />
            )}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    {
        title: "University of Colombo",
        year: "Colombo"
    },
    {
        title: "Eastern University",
        year: "Vantharumoolai"
    },
    {
        title: "University of Jaffna",
        year: "Jaffna"
    },
    {
        title: "University of Kelaniya",
        year: "Kelaniya"
    },
    {
        title: "University of Moratuwa",
        year: "Moratuwa"
    },
    {
        title: "Open University",
        year: "Nawala"
    },
    {
        title: "University of Peradeniya",
        year: "Peradeniya"
    },
    {
        title: "Rajarata University",
        year: "Mihintale"
    },
    {
        title: "University of Ruhuna",
        year: "Matara"
    },
    {
        title: "Sabaragamuwa University",
        year: "Belihuloya"
    },
    {
        title: "South Eastern University",
        year: "Oluvil"
    },
    {
        title: "University of Sri Jayewardenepura",
        year: "Sri Jayewardenepura"
    },
    {
        title: "Uva Wellassa University",
        year: "Badulla"
    },
    {
        title: "University of the Visual and Performing Arts",
        year: "Colombo"
    },
    {
        title: "Wayamba University",
        year: "Kuliyapitiya"
    },
    {
        title: "Gampaha Wickramarachchi University",
        year: "Yakkala"
    },
    {
        title: "University of Vavuniya",
        year: "Vavuniya"
    }
];
