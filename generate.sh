#!/bin/bash

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
NC='\033[0m' # No Color

# Check if src/new-svgs folder is empty
if [ -n "$(ls -A src/new-svgs)" ]; then
    # Run script 1
    ./sh-scripts/gc.sh

    # Check if script 1 ran successfully
    if [ $? -eq 0 ]; then
        echo -e "${ORANGE}script gc.sh ran successfully.${NC}"
        # Run script 2 after script 1 completes
        ./sh-scripts/gi.sh

        # Check if script 2 ran successfully
        if [ $? -eq 0 ]; then
            echo -e "${ORANGE}script gi.sh ran successfully.${NC}"
            # Run script 3 after script 2 completes
            ./sh-scripts/gs.sh

            # Check if script 3 ran successfully
            if [ $? -eq 0 ]; then
                echo -e "${ORANGE}script gs.sh ran successfully.${NC}"
                 echo -e "${GREEN}Components created from SVGs successfully.${NC}"
            else
                echo -e "${RED}Script gs.sh failed. Exiting...${NC}"
                exit 1
            fi
        else
            echo -e "${RED}script gi.sh failed. Exiting...${NC}"
            exit 1
        fi
    else
        echo -e "${RED}script gc.sh failed. Exiting...${NC}"
        exit 1
    fi
else
    echo -e "${RED}[src/new-svgs] folder is empty. No scripts to run.${NC}"
fi
