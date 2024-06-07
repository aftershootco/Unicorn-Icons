#!/bin/bash

# Specify the folder containing SVG files
SVG_FOLDER="./src/new-svgs"
FOLDER_PATH="./src/new-components"
mkdir $FOLDER_PATH
# Loop through all files with the .svg extension in the folder
for svg_file in "$SVG_FOLDER"/*.svg; do
    echo "\n\n\nProcessing file: $svg_file"
    # Print the content of the SVG file
    #!/bin/bash
    FILE_NAME=$(basename -- "$svg_file")
    FILE_NAME="${FILE_NAME%.*}"
    # CAP_FILE_NAME="$(tr '[:lower:]' '[:upper:]' <<< ${FILE_NAME:0:1})${FILE_NAME:1}"
    # Replace hyphens with camel case in the file name
 
    CAP_FILE_NAME=$(echo "$FILE_NAME" |  awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2));}1' FS='[_-]' OFS='')


  # Specify the file path for the TypeScript file
    TS_FILE_PATH="$FOLDER_PATH/$CAP_FILE_NAME"
    C="Icon.tsx"
    TS_FILE_PATH+="$C"
    # echo $TS_FILE_PATH
  # Specify the file path
    touch $TS_FILE_PATH
    FILE_PATH=$TS_FILE_PATH

    I="Icon"
    CAP_FILE_NAME+="$I"

    # Use echo with a here document to insert the content
    echo "import React from 'react'" > "$FILE_PATH"
    echo "import { IconProps } from '../../types/Icons/types'" >> "$FILE_PATH"
    echo "import BaseIcon from '../components/BaseIcon'" >> "$FILE_PATH"
    echo "import DEFAULT_ICON from '../constant'" >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"

    echo "type IconVariant = 'primary' ;" >> "$FILE_PATH"

    echo "type Props = Omit<IconProps, 'variant'> & {" >> "$FILE_PATH"
    echo "  variant?: IconVariant;" >> "$FILE_PATH"
    echo "  // bgColor?: string;" >> "$FILE_PATH"
    echo "  // bgOpacity?: number;" >> "$FILE_PATH"
    echo "};" >> "$FILE_PATH"


    echo "" >> "$FILE_PATH"
    echo "export const $CAP_FILE_NAME = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {" >> "$FILE_PATH"
    echo "  //props" >> "$FILE_PATH"
    echo "  const {" >> "$FILE_PATH"
    echo "    variant = 'primary', className," >> "$FILE_PATH"
    echo "    " >> "$FILE_PATH"
    echo "    // bgColor = DEFAULT_ICON.BG_COLOR, size,">> "$FILE_PATH"
    echo "    // bgOpacity = DEFAULT_ICON.BG_OPACITY," >> "$FILE_PATH"
    echo "    color = DEFAULT_ICON.COLOR, size," >> "$FILE_PATH"
    echo "    inActive = false," >> "$FILE_PATH"
    echo "    ...restProps" >> "$FILE_PATH"
    echo "  } = props" >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"
    echo "  const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color" >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"
    echo "  const size = typeof size === 'number' ? \`\${size}px\` : size " >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"
	  echo "  // variants" >> "$FILE_PATH"
    echo "  const primary = (" >> "$FILE_PATH"

    # cat $svg_file >> $FILE_PATH
   # awk '/^<svg/ { found=1 } found && !added { sub(/>/, " style={{ width: size}}\n\t{...restProps}\n\tref={forwardedRef} className={cn('w-6', className && className)} >", $0); added=1 } 1' "$svg_file"  | awk '{ gsub(/("#E2E2E2"|'\''#E2E2E2'\'')/, "{modifiedColor}"); print}' >> "$FILE_PATH"
awk '/^<svg/ { found=1 } found && !added { sub(/width="[^"]+"/, "{...(size ? { style: { width: size } } : {})}\n\t{...restProps}\n\tref={forwardedRef} className={cn('w-6', className && className)}", $0); sub(/height="[^"]+"/, "", $0); added=1 } 1' "$svg_file" | awk '{ gsub(/("#E2E2E2"|'\''#E2E2E2'\'')/, "{modifiedColor}"); print}' >> "$FILE_PATH"


    echo ")" >> "$FILE_PATH"
    echo "  return <BaseIcon variants={{ primary }} variant={variant}  />" >> "$FILE_PATH"
    echo "})" >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"
done

