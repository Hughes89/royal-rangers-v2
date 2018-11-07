// TODO - LINK TO ACTUAL MODEL ONCE CONNECTED TO DATABASE
let events = [
    {
        description: "has working location",
        end: new Date('November 20, 2018'),
        location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.427706866014!2d-74.92729904886389!3d39.79739687934106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c12d79de64bd13%3A0x9d89ab06fc73f565!2s101+Oak+Ave%2C+West+Berlin%2C+NJ+08091!5e0!3m2!1sen!2sus!4v1487548286377" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
        start: new Date('November 18, 2018'),
        title: "new"
    },
    {
        description: "has working location",
        end: new Date('November 10, 2018'),
        location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.427706866014!2d-74.92729904886389!3d39.79739687934106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c12d79de64bd13%3A0x9d89ab06fc73f565!2s101+Oak+Ave%2C+West+Berlin%2C+NJ+08091!5e0!3m2!1sen!2sus!4v1487548286377" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
        start: new Date('November 2, 2018'),
        title: "new"
    }
];

module.exports = {

    /**
     * @desc Send list of events
     */
    getAllEvents: (req, res) => {
        res.send(events)
    }
    
};