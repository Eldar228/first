//load events model
const Events = require('./models/Events');
const User = require('./models/User');

/*

Kill functionality :

1. find a user by the victimId
2. compare victim's code to the supplied code
    if it does not work - send the response back that it failed
3. change victim's isKilled to true
4. send the response back that the kill is succesful
5. add a new event to all events, who killed who

*/

const kill = async(req, res) => {
    //get the victimId from request
    let victimId = req.body.victimId;
    //get the name of the victim to be killed
    let usersVictimName = req.currentUser.victimName;
    //find the potential victim by code
    let victim = await User.find({code : victimId });
    //if it's not found throw error
    if (!victim) {
        console.log('no such victim');
    } else {
    //if it's found , compare two names and two codes
        if (usersVictimName === victim.name) {
            // now we can actually kill
            // XXX: KILL FUNCTION HERE
            console.log('YES!!!!!!!!!!!');
        }
    }

    //ADD NEW EVENT
    try {
        let e = new Events ({
            killer: req.currentUser.name,
            victim: req.body.victimId,
            time: Date.now()
        });

        e.save(err => {if (err) {
            res.status(500).send(err);
            throw err;
        }
            else
            res.status(200).send('New event created');
        });


    } catch (ex) {
        console.log(ex);
        res.send(ex);
    }

    /*let victim = await User.find(req.currentUser.victimId);
    if (!victim) {
        res.status(404).json({
            error : "victim not found, contact administrator"
        })
    } else {
        if (req.data === victim.code) {
            User.findAndUpdate()
        }
    }
    */
}

module.exports.kill = kill;
