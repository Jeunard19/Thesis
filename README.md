# Languages Game VR

We created a Virtual Reality game using [Networked-Aframe]: https://github.com/networked-aframe/networked-aframe, where pairs can play charades in VR space.

## Usage
1. Clone the repository to your local machine.
2. While in the project folder, Run ```npm i```
3. Run ```npm start```
4. Open an additional terminal window and run ```Download.py```

### VR Game
The VR game runs on the localhost of a local laptop and can be made accessible to the headsets using [Telebit]:https://telebit.cloud, a net server that uses a relay to allow multiplexed incoming connections on any external port. The headsets could access the local host from their browsers using Telebit.

To start the game both pairs with headsets need to enter the same VR space followed by the supervisor using a local laptop.
The game requires both participants to play games of charades using a ball which is connected to their left hand for communication. When spawned, a ball was placed on the participant’s left hand, which would also track the movement of that hand. The ball was the only object of a participant that was also visible to their partner. Each headset had a different colour ball. We referred to the participant with a red ball as Player 1 and the participant with a green ball as Player 2. On their right hand, the participants would see a model of the controller with a laser projecting from it, which was only visible to the user. The use of this laser was to allow participants to interact with the interface in front of them. Each participant could have the role of sender or receiver during each game. The sender is the person acting out the concept, and the receiver tries to guess what the concept is.
When the experiment began, Player 1 was given the role of receiver, and Player 2 was given the role of sender. After each game, we swapped the role of the sender and receiver.
