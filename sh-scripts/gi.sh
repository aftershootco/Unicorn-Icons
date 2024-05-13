# this script is use to generate index file. 

# Delete the existing index.ts file if it exists
rm -f ./src/new-components/index.ts

# Create a new index.ts file
touch ./src/new-components/index.ts
# Loop through all files with the .svg extension in the folder
echo " " > "index.ts"
for svg_file in ./src/new-components/*.tsx; do
    echo "processing $svg_file" 
    FILE_NAME=$(basename -- "$svg_file")
    FILE_NAME="${FILE_NAME%.*}"
    echo "export * from './$FILE_NAME'" >> "./src/new-components/index.ts"
done



