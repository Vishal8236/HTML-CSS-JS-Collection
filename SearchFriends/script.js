var friend = document.getElementById("friend");
var notfriend = document.getElementById("not-friend");

const friends = [
    {
        'id':1,
        'name':'vishal patidar',
        'status':'active',
        'pro_img': 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        'friend' : true
    },
    {
        'id':2,
        'name':'vijay patidar',
        'status':'last seen 2h',
        'pro_img': 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        'friend' : true
    },
    {
        'id':3,
        'name':'hemant patidar',
        'status':'active',
        'pro_img': 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        'friend' : true
    },
    {
        'name':'Hannah Busing',
        'status':'active',
        'pro_img': 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        'friend' : false
    },
    {
        'id':4,
        'name':'Akshay patidar',
        'status':'active',
        'pro_img': 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        'friend' : false
    },
    {
        'id':5,
        'name':'Gopal patidar',
        'status':'last seen 10h',
        'pro_img': 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        'friend' : true
    },
    {
        'id':6,
        'name':'hemant patidar',
        'status':'active',
        'pro_img': 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        'friend' : false
    },
]

const showuser = (friends) =>{
friends.map((data)=>{
    var para1 = document.createElement('div')
    para1.classList = "friend"
    
    //create image section
    var img1 = document.createElement('img')
    img1.src = data.pro_img;
    img1.classList = 'f-img';
    para1.appendChild(img1);

    //create name and status
    var namestatus = document.createElement('div');
    namestatus.classList = 'f-name-status';
    
    var fname = document.createElement('div');
    fname.innerHTML = data.name;
    fname.classList = 'f-name';

    var fstatus = document.createElement('div');
    fstatus.innerHTML = data.status;
    fstatus.classList = 'f-status';

    namestatus.appendChild(fname);
    namestatus.appendChild(fstatus);
    para1.appendChild(namestatus);

    //create follow and message button
    var mess_follow = document.createElement('button');
    mess_follow.classList = 'message';
    mess_follow.innerHTML = data.friend == true ? "Message":"Follow";
    para1.appendChild(mess_follow);

    if(data.friend){
        friend.appendChild(para1);
    }
    else{
        notfriend.appendChild(para1);
    }
})
}

//call show user 
showuser(friends);

var search_f = document.getElementById("search");
const findFriend = () =>{
    let str = search_f.value;
    let newFr = friends.filter((data) => {
        return (data.name.substring(0, str.length)).toLowerCase() == str.toLowerCase();
    })

    while (friend.hasChildNodes()) {
        friend.removeChild(friend.firstChild);
    }

    while (notfriend.hasChildNodes()) {
        notfriend.removeChild(notfriend.firstChild);
    }
    showuser(newFr);
}