#!/bin/bash

FOLDER_PATH="./src/icons"
TOTAL_COUNT=0

# Color codes
COLOR_GREEN='\033[0;32m'
COLOR_ORANGE='\033[0;33m'
COLOR_BLUE='\033[0;34m'
COLOR_RESET='\033[0m' # Reset color

# Log the start of the script

echo -e "----------------------------------------"
echo -e "${COLOR_ORANGE}Script started...${COLOR_RESET}"
echo -e "----------------------------------------"

# Loop through all folders containing .tsx files
for folder in "${FOLDER_PATH}"/*/; do
    # Get the folder name
    folder_name=$(basename "${folder}")
    
    # Log the current folder being processed
    echo -e "${COLOR_ORANGE}Processing folder: ${folder_name}${COLOR_RESET}"

    # Initialize the count for the current folder
    folder_count=0

    # Delete the existing index.ts file if it exists
    rm -f "${folder}index.ts"

    # Create a new index.ts file
    touch "${folder}index.ts"

    # Loop through all files with the .tsx extension in the folder
    for tsx_file in "${folder}"*.tsx; do
        FILE_NAME=$(basename -- "$tsx_file")
        FILE_NAME="${FILE_NAME%.*}"
        echo "export * from './$FILE_NAME';" >> "${folder}index.ts"
        ((folder_count++))
    done

    # Log the total count for the current folder
    echo -e "${COLOR_BLUE}Total files in ${folder_name}: ${folder_count}${COLOR_RESET}"

    # Add the folder count to the total count
    ((TOTAL_COUNT += folder_count))
done

# Log the total count of folders
echo -e "${COLOR_GREEN}Total number of files processed: ${TOTAL_COUNT}${COLOR_RESET}"

# Log the end of the script
echo -e "----------------------------------------"
echo -e "${COLOR_GREEN}SCRIPT COMPLETED.${COLOR_RESET}"
echo -e "----------------------------------------"
