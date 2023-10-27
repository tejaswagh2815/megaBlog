import React from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((post) => {
      if (post) {
        setPosts(post.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read Post
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      {posts.map((post) => (
        <div className="p-2 w-1/4" key={post.$id}>
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
}

export default Home;
