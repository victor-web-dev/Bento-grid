import "./Grid.style.css";
import createPostImg from "@/assets/images/illustration-create-post.webp";
import aiContentImg from "@/assets/images/illustration-ai-content.webp";
import fiveStarsImg from "@/assets/images/illustration-five-stars.webp";

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

          <div className="item grid-item-manage"></div>

          <div className="item grid-item-audience"></div>

          <div className="item grid-item-maintain"></div>

          <div className="item grid-item-grow"></div>

          <div className="item grid-item-schedule"></div>
        </div>
      </main>
    </>
  );
}
