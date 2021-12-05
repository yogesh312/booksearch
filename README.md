# booksearch
hello LogicSoft team,
thank you for the oppurtunity for this assignment,
i am a Only backend dev so i worked on backend only

Here i did it two ways because in way 1 I didn't understand the task properly and in way2 i tried to rectify it in a sorted manner after a discussion,

so here i present you way1 and way2

WAY1:
here i have made a seprate model of book with validations on schema, and i thought that key is on us to define so i took type of book as key and i am getting all the books on those query
we have three api
1-to create Book
2-to get all book
3-to get book by either ISBN or type of category or books or by both if we put both of the query together
error handling are done on routes as well as on cotrollers

WAY2:
as the task needed me to do, i called the API asyncronously, which kept it upder 800ms average time,
here i am getting book by isbn id and storing it and rectifying it by using inbuilt nodeJS modules,
then sending it back on response with messege and status codeznnzmzm
