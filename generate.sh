#!/bin/bash

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
COLOR_RESET='\033[0m' # No Color

# Log the start of the script
echo -e "----------------------------------------"
echo -e "${ORANGE}SCRIPT STARTED...${COLOR_RESET}"
echo -e "----------------------------------------"

# Check if src/new-svgs folder is empty
if [ -n "$(ls -A src/new-svgs)" ]; then
    # Run script 1
    ./sh-scripts/gc.sh

    # Check if script 1 ran successfully
    if [ $? -eq 0 ]; then
        echo -e "${ORANGE}components created successfully.${COLOR_RESET}"
        # Run script 2 after script 1 completes
        ./sh-scripts/gi.sh

        # Check if script 2 ran successfully
        if [ $? -eq 0 ]; then
            echo -e "${ORANGE}setting up for stories.${COLOR_RESET}"
            # Run script 3 after script 2 completes
            ./sh-scripts/gs.sh

            # Check if script 3 ran successfully
            if [ $? -eq 0 ]; then
                echo -e "${ORANGE}stories created successfully.${COLOR_RESET}"
                
                # Log the end of the script
                echo -e "----------------------------------------"
                echo -e "${GREEN}GENERATE COMPONENTS AND STORIES SUCCESSFULLY.${COLOR_RESET}"
                echo -e "----------------------------------------"

            else
                echo -e "${RED}creating stories failed. Exiting...${COLOR_RESET}"
                exit 1
            fi
        else
            echo -e "${RED}setting for stories failed. Exiting...${COLOR_RESET}"
            exit 1
        fi
    else
        echo -e "${RED}creating stories failed. Exiting...${COLOR_RESET}"
        exit 1
    fi
else
    echo -e "${RED}[src/new-svgs] folder is empty. No scripts to run.${COLOR_RESET}"
fi
