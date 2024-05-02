<div align="center">
    <img src="https://i.imgur.com/buSetTc.png" alt="Unicorn Design System">
    <h1>Unicorn Icons</h1>
    <strong>Unicorn Icons is Aftershoot's inbuilt library for using different icons with custom configurations in their Desktop app.</strong>
</div>
<br>
<div align="center">
    <a href="https://github.com/aftershootco/Unicorn-Design-System/blob/develop-readme/LICENSE.md">
        <img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License">
    </a>
    <a href="https://twitter.com/aftershootco?lang=en">
        <img src="https://img.shields.io/twitter/follow/aftershootco?label=Twitter&style=flat&logo=twitter&color=1DA1F2" alt="Aftershoot Twitter">
    </a>
</div>

## How to Build?

1. Get the lastest pull

```sh
git pull
```

2. Install all the dependencies

```sh
yarn
```

3. Now build it.

```sh
yarn build
```

## How to generate automatically

0. Make sure the main color/stroke color of the svg is #E2E2E2. Otherwise, it will not work properly.

1. Put all the SVGs in [/src/new-svgs].

2. Run `sh generate.sh`. This will generate a [src/new-components] and [src/new-stories] with icon components,
   as well as the stories.

3. Once, tested and satisfied, move the component and stories
   in the right folders ([src/icons/subfolder] or [src/stories])

4. Inside the newly created components, update any secondary colors with the correct prop names.

5. Finally run `sh export.sh`. This will export newly add components from each the respected folders.

    You are all set

## Control Secondary Color

Many icons have secondary colors - background color, accent color etc. Make sure to modify the component with correct props name
background color - bgColor
accent color - accentColor.

## Practice for Correct Types

Every icon component have three type - 'primary' | 'secondary' | 'tertiary' by default
Keep only primary if there is only one icon type.
Add types if there the component have secondary colors such as bgColor or accentColor

## Storybook

Stories are automatically generated when you run - sh generate.sh.
New stories will have prefix folder name as NEW. Make sure to change this as per your require.
Also, remember to import icon correctly from the icon folder.

## To publish storbook run - yarn chromatic

## Using icon components Tips

1. Import from '@aftershootco/unicorn-icons'

2. Props - size, color, fillColor (icons with fill), variant (if icon have more than one variant), bgColor (icon with bg), inActive (make icon color dull, this will have more priority than color props)

3. on hover effect example

    ```js
    <button className='group' onClick={props.onClose}>
    	<CloseIcon size={14} color='#777777' className='group-hover:[&_*]:fill-white group-hover:[&_*]:stroke-white' />
    </button>
    ```

## Contributors

-   Akash Singh — [Github](https://github.com/frannkenstein)
-   Yash Johri — [Github](https://github.com/yash1200)
-   Booi Mangang - [Github](https://github.com/booi-dev)

Chromatic Dashboard: https://www.chromatic.com/build?appId=65bb4c7b2d4e48c0410f5829&number=3

Live storybook: "[https://65bb4c7b2d4e48c0410f5829-cenawazgya.chromatic.com/?path=/story/culling-addfoldericon--default&globals=backgrounds.value:!hex(333333)](<https://65bb4c7b2d4e48c0410f5829-cenawazgya.chromatic.com/?path=/story/culling-addfoldericon--default&globals=backgrounds.value:!hex(333333)>)"
