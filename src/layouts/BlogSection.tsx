import { Button } from "../components/Button";
import { blogPosts } from "../data/blog";
import showIcon from "../assets/icons/show_icon.svg";

export const BlogSection = () => {
  const featuredPost = blogPosts.find(
    (post) => post.buttonType === "secondary"
  );
  const regularPosts = blogPosts.filter(
    (post) => post.buttonType !== "secondary"
  );

  return (
    <section className="w-[80%] mx-auto py-12 space-y-12">
      <div className="flex flex-wrap justify-center lg:justify-between gap-8 lg:items-end">
        <h1 className="l2_heading text-center lg:text-left">
          Read More Articles From Our Blog
        </h1>
        <div className="flex justify-center items-center flex-wrap gap-4 text-[24px] text-gray-1">
          <span className="cursor-pointer hover:underline">
            Content Writing
          </span>
          <span className="cursor-pointer hover:underline">
            Content Marketing
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center lg:items-start lg:flex-row gap-8">
        {featuredPost && (
          <div className="max-w-540px">
            <img src={featuredPost.image} alt={featuredPost.decription} />
            <span className="block mt-4 text-gray-1 uppercase">{featuredPost.date}</span>
            <h3 className="l3_heading max-w-[350px]">{featuredPost.title}</h3>
            <p>{featuredPost.excerpt}</p>
            <Button variant="secondary">Read More</Button>
          </div>
        )}

        {regularPosts.map((post, index) => (
          <div key={index} className="max-w-[250px]">
            <img src={post.image} alt={post.decription} />
            <span className="block mt-4 text-gray-1 uppercase">{post.date}</span>
            <h3 className="l3_heading max-w-[210px]">{post.title}</h3>
            <p className="text-gray-1">{post.excerpt}</p>
            <Button variant="rounded" className="mt-4">
              <img
                src={showIcon}
                alt="Eye icon image"
                className="bg-white rounded-full"
              />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
