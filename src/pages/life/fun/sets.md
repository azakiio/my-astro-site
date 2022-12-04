# Set logic

Each card is an object with the following properties: fill, Color, shape, count

I initially stored these objects directly but realized I can enumerate all the options and just store their index in the database. The saves on storage and then we can just computer correct card from us index then give an example.

Next we have the shapes thinking about how I could use this to make the shapes better I love opting with SVGs the problem was the striped background I go to different ways to do it with SVGs but I couldn’t really get it to look right I try these SVGs from Skelly Drive exporting the different types including the ones with stripes but it didn’t look that good on mobile you could really different shades of solid and striped versions
Next was actually rendering the cards and she started by getting a couple SVGs of different shapes but the tricky part was the striped fill I couldn’t get it to look right on different display sizes and on my initial testing the mobile stroke version and solid were no different enough.

That I discovered mask image and repeating linear gradients.
