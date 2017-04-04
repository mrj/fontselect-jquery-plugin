# Fontselect jQuery Plugin

A font selector to choose from fonts available as part of the Google Web Fonts api. 

Let users easily select and preview a font from Google's large range of free fonts.

## Changes From Parent

The goal has been changed from selecting a font and a set of variants and subsets to selecting just the font and loading all weight variants of the selected font,
ready to display a particular weight when a font-weight style is set. Subsets and italic variants aren't currently loaded.

To support this, a `showFontOptions` option has been added, which, if set false, prevents rendering of the variant and subset checkboxes.

Also, to save time and memory in re-initialization, the ability to call methods on existing fontselect instances has been added.

## Documentation

To create a font selector simply run the plugin on a standard html input element.

### How to use

Initialize via:

        [jQueryElements].fontselect(options);
        
Call a method on already-initialized font selectors:

        [jQueryElements].fontselect("method", args...);
        
        e.g. $('#font').fontselect("updateSelected") can be used to update the selector after changing the value of the underlying id="font" text box.

### Initialization Options

* style: the class to give the new font selector, default 'font-select'
* placeholder: text to use when no font is selected yet, default 'Select a font'
* lookahead: a number of fonts to try and preload ahead in the select box, default 2
* addNoneOption: boolean flag to allow no font to be selected, default true
* showFontOptions: boolean flag to show checkboxes to select a set of the font's variants and subsets, default true

        $('input.fonts').fontselect({
          style: 'font-select',
          placeholder: 'Select a font',
          lookahead: 2,
          addNoneOption: true,
          showFontOptions: true
        });
           
### Events

Fontselect triggers the change event on the original element when a font is selected. 
An example is included to show how this could be used to update the font on the current page.

        $('input.fonts').fontselect().change(function(){
        
          // replace + signs with spaces for css
          var font = $(this).val().replace(/\+/g, ' ');
          
          // log font name
          console.log(font);
        });



## License / Credits

This plugin is released under the MIT license. It is simple and easy to understand and places almost no restrictions on what you can do with the code.
[More Information](http://en.wikipedia.org/wiki/MIT_License)


## Download

Releases are available for download from
[GitHub](http://github.com/tommoor/fontselect-jquery-plugin/downloads).
