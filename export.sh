

FOLDER_PATH="./src/icons"

# find ./src/icons -name "index.ts" -type f -delete

# Loop through all folders containing .tsx files
for folder in ./src/icons/*/; do

    # Delete the existing index.ts file if it exists
    rm -f "${folder}index.ts"
    # Create a new index.ts file
    touch "${folder}index.ts"

    # Loop through all files with the .tsx extension in the folder
    for tsx_file in "${folder}"*.tsx; do
        FILE_NAME=$(basename -- "$tsx_file")
        FILE_NAME="${FILE_NAME%.*}"
        echo "export * from './$FILE_NAME';" >> "${folder}index.ts"
    done
done