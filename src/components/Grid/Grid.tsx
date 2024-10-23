import "./Grid.style.css";
import createPostImg from "@/assets/images/illustration-create-post.webp";
import aiContentImg from "@/assets/images/illustration-ai-content.webp";
import fiveStarsImg from "@/assets/images/illustration-five-stars.webp";

import multipleImg from "@/assets/images/illustration-multiple-platforms.webp";

import peopleProfileImg from "@/assets/images/illustration-audience-growth.webp";

import scheduleImg from "@/assets/images/illustration-consistent-schedule.webp";

import growFollowersImg from "@/assets/images/illustration-grow-followers.webp";

export function Grid() {
  return (
    <>
      <main>
        <div className="grid-container">
          <div className="item grid-item-create">
            <div>
              <p>
                Create and schedule content <span>quicker</span>.
              </p>
              <div>
                <img src={createPostImg} alt="create post" />
              </div>
            </div>
          </div>

          <div className="item grid-item-ai">
            <div>
              <p>Write your content using Ai.</p>
              <div>
                <img src={aiContentImg} alt="ai talk" />
              </div>
            </div>
          </div>

          <div className="item grid-item-social">
            <div>
              <p>
                Social Media <span>10x</span> <span>Faster</span> with AI
              </p>
              <div>
                <img src={fiveStarsImg} alt="five stars" />
              </div>
              <p>Over 4,000 5-star reviews</p>
            </div>
          </div>

          <div className="item grid-item-manage">
            <div>
              <div>
                <img src={multipleImg} alt="multiple platforms" />
              </div>
              <p>Manage multiple accounts and platforms</p>
            </div>
          </div>

          <div className="item grid-item-audience">
            <div>
              <p>&gt;56%</p>
              <p>faster audience growth</p>
              <div>
                <img src={peopleProfileImg} alt="people profiles" />
              </div>
            </div>
          </div>

          <div className="item grid-item-maintain">
            <div>
              <p>Maintain a consistent posting schedule.</p>
              <div>
                <img src={scheduleImg} alt="calendar illustration" />
              </div>
            </div>
          </div>

          <div className="item grid-item-grow">
            <div>
              <div>
                <img src={growFollowersImg} alt="" />
              </div>
              <p>Grow followers with non-stop content.</p>
            </div>
          </div>

          <div className="item grid-item-schedule"></div>
        </div>
      </main>
    </>
  );
}
