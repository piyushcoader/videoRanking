/**
 * Created by piyushthapa on 7/10/14.
 */
Template.home.helpers({
    'posts':function(){
        var datas=[
            {
                vote:19,
                name:"Bill Salesengineer",
                projName:"Competitive Differentiators",
                projDesc:"I w ent into more depth on the competitive differentiators on this version.this corresponds to minute 3:45 on the CTO's pitch.",
                cmntNo:"3",
                date:"July 6, 2014"
            },
            {
                vote:15,
                name:"Sue Salesperson",
                projName:"Business Decision Maker",
                projDesc:"I focused on the ROI for the customer in this version",
                cmntNo:"10",
                date:"July 7, 2014"
            },
            {
                vote:11,
                name:"Pete Productmanager",
                projName:"With Roadmap",
                projDesc:"This version adds a few NDA-only roadmap slides and I included a short video to describe that.",
                cmntNo:"7",
                date:"July 6, 2014"
            }
        ];
        return datas;

}
});