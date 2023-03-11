![Screenshot 2023-03-10 at 5 48 11 PM](https://user-images.githubusercontent.com/43022200/224458450-c39f0f38-df3b-4027-82f9-8de3f5c6dc42.png)
# A World of Space
A world of space is an interactive fiction piece about a variety of things. it touches on a few things: life, the notion of free will, family, and deals with the browser as a medium. I made it primarily because I was interested in two aspects: building a choose your own adventure game that's inspired by twine but has UI elements that I wanted to create and creating an interactive fiction piece

### Tech
The piece is built on React / next with vanilla css. Sound effects and audio use the <audio> tag in HTML and everything is just in one file (for better or for worse). 
  
The script is organized as an array of objects which have various properties. it's described below which is
  
  ``` 
  script = [{ 
    display: string,
    button: string
    variousMusicQueues: boolean
    end: boolean
    skipNumbers: Array<number> | number
    }
  ]
  ```
  
 The skip is used to deal with skipping around depending on choices that the player makes, which should bounce around in the array
  
  
### Further improvements
There's a world in which this becomes a componentized library/method of creating a game. I don't think it's very stable / good right now but I would be interested in revisting.
  - What does this look like if this was organized as tables and joined on potential tables to read through passes? Or a NoSQL database? Might this implementation be easier?
  - Adding a debugger. Oh god yeah
  
  
Special thanks to Maxwell Neely-Cohen from the html.review and the html.review team for accepting this piece. it was fantastic to work together
  
