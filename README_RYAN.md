Hello Ryan,

As you can see made a few changes to your website, hope you enjoy the changes! You can still modify it as much as you want but
I tried to keep to your original design as closely as possible, however this took me a while to do since I made this in REACT rather
than standard HTML/CSS/JS, yes effectively the entire website is written in JS, which is pretty crazy right. So it took me way longer
than had I just made it normally. It also means if you wish to modify the website in the future, it might be a little confusing, however
a couple of easy changes you can make if you decide to add to the site in future;

##animation.js

This contains all the fancy animations you've seen on the website, if you wish to modify the duration, color etc of any simply change the
variables their, should be pretty self-explenatory. 

##colors.js

This contains the color scheme of the entire website, you can easily change the colour scheme by ammending the colors in the objects, makes
it pretty easy to change the way it looks by changing a few hex colours. DO not change any variable names as this will break the site, if you
think some of the hover effects are to many and too specific you can always give them the same colour. (Some dont look great on the primary
background).

##urls.js

If you wish to ammend a url to something else, or add more Urls to the website, this should be similar, it is reccomended you use https however,
cause its more secure and all that shiz.

##video-selector.js

This makes it REALLY easy to add more videos to the site, as many as you want really (it will slow the website down), simply copy the logic below;

   '{
        id : 'youtubeId', 
        image : image from the img/pathname, 
        heading : 'heading',
        description : () => <Paragraoh> Insert text here <Bold {name of animation you wish to use} href={Urls.href in urls file}>Click me!</Bold>.</Paragraph>
    },'

Thats it really, all you need is to save another icon to your /img folder and then another video can be rendered. 

    End...

They're a few changes I wasn't able to make due tothe lack of access to certain resources which you can ammend if you wish,
or leave it as it is, or don't use it idk its your life, you do you. Some reccomend changes listed below.

Some other changes you can make to make the website more efficent.

In the mannifest.json file, a larger size for the favicon will allow it render on large android devices better. Should have a size of at least 512px, for more information see https://developers.google.com/web/tools/lighthouse/audits/manifest-contains-192px-icon  Please supply 152x152 and sizes 192x192 (Will have to remake the logo at a very high res)

Peace, 

God Bless,

JLEBS