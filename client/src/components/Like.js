import React, { useState, useEffect, useRef } from "react"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons"

export default function Like() {

  let [like, setLike] = useState()
  let [dislike, setDislike] = useState()
  let [state, setState] = useState(false)
  let [likeButton, setLikeButton] = useState(JSON.parse(localStorage.getItem("likeButton")) | false)
  let [dislikeButton, setDislikeButton] = useState(JSON.parse(localStorage.getItem("dislikeButton")) | false)

  const [id, setId] = useState(JSON.parse(sessionStorage.getItem("id")))

  useEffect(() => {
    setId(JSON.parse(sessionStorage.getItem("id")));
  }, [])

  useEffect(() => {
    if (state === true) {
<<<<<<< HEAD
      let response = fetch("http://localhost:5000/api/v1/likes/setLikes",
=======
      let response = fetch("http://localhost:80/api/v1/likes/setLikes",
>>>>>>> 8cf1e60944159f9b4b7acffacfec47dde76a11db
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            likes: like,
            dislikes: dislike
          })
        });
    }
  }, [like, dislike, state])

  useEffect(() => {
<<<<<<< HEAD
    fetch("http://localhost:5000/api/v1/likes/getLikes")
=======
    fetch("http://localhost:80/api/v1/likes/getLikes")
>>>>>>> 8cf1e60944159f9b4b7acffacfec47dde76a11db
      .then(response => response.json())
      .then(data => {
        setLike(data.likes)
        setDislike(data.dislikes)
      });
  }, [])

  const plusOneLike = async (e) => {
    setLike(prevState => prevState + 1)
    if (dislike > 1)
      setDislike(prevState => prevState - 1)
    else
      setDislike(0)

    e.preventDefault()

    setState(state = true)
    setLikeButton(likeButton = true)
    setDislikeButton(likeButton = false)
    localStorage.setItem("likeButton", likeButton);
    localStorage.setItem("dislikeButton", dislikeButton);
  }


  const plusOneDislike = async (e) => {

    e.preventDefault()

    setDislike(prevState => prevState + 1)

    if (like > 1)
      setLike(prevState => prevState - 1)
    else
      setLike(0)

    setState(state = true)
    setLikeButton(likeButton = false)
    setDislikeButton(likeButton = true)
    localStorage.setItem("likeButton", likeButton);
    localStorage.setItem("dislikeButton", dislikeButton);
  }

  if (id === null)
    return (
      <div>
        <center>
          <button
            style={{ border: "1px solid black", width: "15%" }}
            disabled={true}
          >
            <FontAwesomeIcon icon={faHeart} />
            <div id="like">
              {like}
            </div>
          </button>
        </center>
        <center>
          <button
            style={{ border: "1px solid black", width: "15%" }}
            disabled={true}
          >
            <FontAwesomeIcon icon={faHeartBroken} />
            <div id="dislike">
              {dislike}
            </div>
          </button>
        </center>
      </div>
    );

  else
    return (
      <div>
        <center>
          <button
            style={{ border: "1px solid black", width: "15%" }}
            onClick={plusOneLike}
            disabled={likeButton}
          >
            <FontAwesomeIcon icon={faHeart} />
            <div id="like">
              {like}
            </div>
          </button>
        </center>
        <center>
          <button
            style={{ border: "1px solid black", width: "15%" }}
            onClick={plusOneDislike}
            disabled={dislikeButton}
          >
            <FontAwesomeIcon icon={faHeartBroken} />
            <div id="dislike">
              {dislike}
            </div>
          </button>
        </center>
      </div>
    );

}

