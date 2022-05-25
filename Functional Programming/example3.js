// This is sample code that function is not pure , 
// for solving we can extract side effect and make a pure function

/// Before

function addComment(userId,comment){
  const record = {
    id:uniqId(),
    userId,
    text:comment
  }
  const elem = buildCommentElement(record)
  commentsList.appendChild(elem)
}

addComment(23,"First comment")

/// After


function addComment(userID,commentID,comment){
  var record = {
    id:commentID,
    userID,
    text:comment
  }
  return buildCommentElement(record)
}
const commentID = uniqId()

commentsList.appendChild(addComment(42,commentID,"The first comment")
)