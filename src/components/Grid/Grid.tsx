import "./Grid.style.css";
import createPostImg from "@/assets/images/illustration-create-post.webp";
import aiContentImg from "@/assets/images/illustration-ai-content.webp";

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
            <p>Write your content using Ai.</p>
            <div>
              <img src={aiContentImg} alt="ai talk" />
            </div>
          </div>

          <div className="item grid-item-social"></div>

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
