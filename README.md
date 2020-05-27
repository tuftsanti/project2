# The Music List

Link to the live app on Heroku:
https://andysfirstapp.herokuapp.com

## Setup:
I have a massive collection of (legal) live music torrents that I keep on my private server, that I will admittedly not listen to in its entirety for many years. Compounding that dilemma, I add new music to the list almost daily. I completed creating this server years ago when utorrent was still the app of choice to mass download and seed droves of files in a Windows environment. Some days everything worked according to plan, sometimes I couldn't download, couldn't seed, couldn't view my list, couldn't recognize my server on the LAN. Ultimately when I had everything working the way I wanted, I made sure to keep it static. I didn't want to risk breaking anything that already seemed to run on a razor's edge of success. 

Because of the nature of utorrent, I didn't have a great way to catalog, sort, or search my collection without logging in to the server and checking manually. If I was checking remotely without direct server access I had to use a mobile app or simply progress without knowing whether this show existed already.
  
At this point I should mention that I also have these shows on a Plex server, but the manipulability of files within that is also lacking. At least Plex has a proper API with RESTful routes, but what fun is that? This project was meant to be a challenge, because if something can be done simply, it would have been done already. I set out to catalog my shows in an online searchable database that I can manipulate on the go.
  
## Execution:
With utorrent what it is, sometimes it works, other times not. It's fairly customizable within the program itself, with the ability to dictate where individual shows would be saved, as well as sorting by name, date added, seed ration, folder size, etc. I thought this would all be useful to me in creating my database; trying to mimic its mechanic within my app. I found some APIs made specifically for utorrent, but they haven't been update in years, aren't for this version of software, and don't return data in JSON format. I was able to get my list of shows, but it was in an array of nested arrays without the ability to sort by artist, show date, or show location. It simply passed the file of folder name as an element, which wasn't ideal. I briefly investigated the Plex API to see if I could at the very least get some data helpful to my cause. I quickly determined the liability was with utorrent passing the data in full rather than separating into useful name:value pairs. I guess it was a lot to ask from a 6 year old piece of software. I thought briefly about updating to the latest version, but determined this wouldn't fix the problem. 
  
## Conclusion
With that unfortunate news, I couldn't keep a live database without successfully calling an API. For the purposes of this project, my only option was to enter each of my >439 shows in manually, which would have taken me all week. Instead, I built a dummy database with appropriate data of about a dozen shows as a proof of concept, that I could immediately seed and manipulate. In the end, it's fully functional with all RESTful routes, user authentication, and fully searchable. Not ideal, but given the circumstances, it works well enough. I gave it a gaudy color scheme to match my opinion on utorrent's capacity as an API.
  
## Future Work
This is still a passion of mine, and I hope to complete this in the future. Hopefully before I run out of music to listen to, if that's even possible. Some things I should investigate:
  * Try to manipulate the utorrent API that hasn't been committed in ~ 5 years.
  * Assuming API success (or help from PLEX), try to manipulate the data to break into artist, date, and location.
  * Implement a true API so that my database will update with show additions or deletions.
  * If all else fails, switch to a different torrent program that supports fully outputting API, which I'm not sure exists.
