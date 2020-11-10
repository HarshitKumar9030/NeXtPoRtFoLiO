import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import PostExcerpt from "./post-excerpt";
import ReadTime from "./read-time";
import Project from "./../public/project-tag.svg";

export default function PostHeader({ title, coverImage, date, excerpt }) {
  return (
    <>
      <div className="container m-auto mt-32 lg:mt-40">
        <Project className="inline-block ml-6 h-5 md:h-6 lg:h-10" />
        <div className="mt-1">
          <PostTitle>{title}</PostTitle>
        </div>
        <div>
          <PostExcerpt>{excerpt}</PostExcerpt>
        </div>
        <div></div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <div className="mb-6 text-base md:text-xl lg:text-2xl ml-6 text-gray-700 font-medium">
          <Date dateString={date} />
        </div>
        {/* <div>{post.minutes}</div> */}
      </div>
      <div className="w-auto mb-16">
        <CoverImage title={title} url={coverImage.imgix_url} />
      </div>
    </>
  );
}
