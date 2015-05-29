# Expandable Maximum List Items jQuery Plugin

This jQuery plugin will automatically hide all excess list items past a maximum number. It then adds an expand/collapse link that uses the slideToggle effect to show/hide them. Each list item is collapsed in succession to give the appearance of using slideToggle (slideUp, SlideDown) on a container. The expand/collapse link can also include the number of items that are hidden.

## USAGE EXAMPLE

Here’s a basic example:

```
$(document).ready(function() {
    $('#elementToApplyHere').hideMaxListItems({ 'max':4 });
});
```

## PLUGIN OPTIONS

There are 5 available options; the maximum number of list items to show, the speed 
of the slide animation in milliseconds, the HTML used for the expand/collapse 
link, and the text used in this link. 

It defaults to a max of 5, a speed of 1000 (ms), and a paragraph containing a link with “READ 
MORE”. Here’s an example with the options:

```
$(document).ready(function() {
    $('#content ul').hideMaxListItems({
        'max':6,
        'speed':2000,
    	'moreText':'READ MORE',
		'lessText':'READ LESS <em>Can Use HTML</em>',
        'moreHTML': '<p class="maxlist-more"><a href="#"></a></p>'
    });
});
```

Note that the expand/collapse container requires the “maxlist-more” class, and a child anchor tag. I've left his as an option in case you wanted to do something like:

```
'moreHTML': '<div class="maxlist-more someOtherClass"><span class="someOtherExampleWrapper"><a class="myButtonClass" href="#"></a></span></div>'
```

## INCLUDE MAX ITEM COUNT

You also can display the number of additional list items in the moreText and lessText options.
If you include the text "[COUNT]", it will be replaced with the number. Example:

```
$('#selector ul').hideMaxListItems({ 'max':3, 'moreText':'Read More ([COUNT])' }); 
```

If there were 10 items in the list, it would read:
"Read More (7)"

## HANDLING DYNAMIC UPDATES TO YOUR LIST

If you're adding or removing list items dynamically (such as with AJAX), simply call the hideMaxListItems function again in the same way that you initiated it, when your list changes. The plugin will avoid adding to the DOM by hiding/showing any existing Read More button, and will reset any items that were hidden previously.
