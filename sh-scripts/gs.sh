# Specify the folder containing SVG files
SVG_FOLDER="./src/new-components"
FOLDER_PATH="./src/new-stories"
mkdir $FOLDER_PATH
# Loop through all files with the .svg extension in the folder
for svg_file in "$SVG_FOLDER"/*.tsx; do
    echo "\n\n\nProcessing file: $svg_file"
    # Print the content of the SVG file
    #!/bin/bash
    FILE_NAME=$(basename -- "$svg_file")
    FILE_NAME="${FILE_NAME%.*}"
    # CAP_FILE_NAME="$(tr '[:lower:]' '[:upper:]' <<< ${FILE_NAME:0:1})${FILE_NAME:1}"
    # Replace hyphens with camel case in the file name
    CAP_FILE_NAME=$(echo "$FILE_NAME" | sed -E 's/(^|-)([a-z])/\U\2/g; s/(^|-)([A-Z])/\2/g')


  # Specify the file path for the TypeScript file
    TS_FILE_PATH="$FOLDER_PATH/$CAP_FILE_NAME.stories.tsx"
# Specify the file path
    touch $TS_FILE_PATH
    FILE_PATH=$TS_FILE_PATH
    # Use echo with a here document to insert the content
    echo "import type { Meta, StoryObj } from '@storybook/react'" > "$FILE_PATH"
    echo "import React from 'react'" >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"
    echo "import { $CAP_FILE_NAME } from '../new-components/$CAP_FILE_NAME'" >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"
    echo "const meta: Meta<typeof $CAP_FILE_NAME> = {" >> "$FILE_PATH"
    echo "  component: $CAP_FILE_NAME," >> "$FILE_PATH"
    echo "  title: 'NEW/$CAP_FILE_NAME'," >> "$FILE_PATH"
    echo "  decorators: [" >> "$FILE_PATH"
    echo "    (Story) => (" >> "$FILE_PATH"
    echo "      <div style={{ margin: '1rem' }}>" >> "$FILE_PATH"
    echo "        <Story />" >> "$FILE_PATH"
    echo "      </div>" >> "$FILE_PATH"
    echo "    )," >> "$FILE_PATH"
    echo "  ]," >> "$FILE_PATH"
    echo "}" >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"
    echo "export default meta" >> "$FILE_PATH"
    echo "type Story = StoryObj<typeof $CAP_FILE_NAME>" >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"
    echo "export const Default: Story = {}" >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"
    echo "export const Red: Story = {" >> "$FILE_PATH"
    echo "  args: {" >> "$FILE_PATH"
    echo "    color: 'red'," >> "$FILE_PATH"
    echo "  }," >> "$FILE_PATH"
    echo "}" >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"

    echo "export const inActive: Story = {" >> "$FILE_PATH"
    echo "  args: {" >> "$FILE_PATH"
    echo "    inActive: true," >> "$FILE_PATH"
    echo "  }," >> "$FILE_PATH"
    echo "};" >> "$FILE_PATH"

    echo "export const Large: Story = {" >> "$FILE_PATH"
    echo "  args: {" >> "$FILE_PATH"
    echo "    size: 30," >> "$FILE_PATH"
    echo "  }," >> "$FILE_PATH"
    echo "}" >> "$FILE_PATH"
done