My iTunes Library
Ethan Blodgett
It's a database of the movies I've bought on iTunes. But only from A-I because adding these takes time.
The UML diagram is in the repository. I didn't know how to link it here.

The User data model is for the Actors. I realize now this was likely a mistake *design-wise*, but with how much trouble
Maven and all that stuff gave me, I hope it works fine.

The two domain object data models are Films and Directors

User to Domain relationship is a many-to-many relationship where Actors can be credited to many Films,
and Films can have many Actors credited in them.

Domain to Domain relationship is a one-to-many relationship where Directors can be attached to many Films.

The portable enumerations are the Rating and Genre for each of the Films
G PG PG-13 R
ACTION COMEDY DRAMA HORROR MUSICAL MYSTERY SCI-FI THRILLER

As I'll likely mention in my submission, my computer updated a little over a week ago and screwed up my project's ability
to link to the Maven repository. None of the things I tried before worked and not knowing if I'd have time to fix things
again, I decided to do as best I could blindly using what I had learned. So, I can't give a description of the user interface,
because I have not seen it nor do I know if it works.