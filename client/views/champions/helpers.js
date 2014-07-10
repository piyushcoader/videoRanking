/**
 * Created by piyushthapa on 7/10/14.
 */
Template.champion.helpers({
    'messages':function(){
        var datas=[
            {
                likes:12,
                comments:14,
                video:16,
                messageName:"Message 1",
                img:"/images/userImg.png",
                name:"Ben Jones",
                desc:"this is the template description of message 1. It is just read from json object"
            },
            {
                likes:12,
                comments:14,
                video:16,
                messageName:"Message 2",
                img:"/images/userImg.png",
                name:"Lineol Messi",
                desc:"We are in to the final of fifa worldcup 2014....."
            }

        ];
        return datas;
    }
});