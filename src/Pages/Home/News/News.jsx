import React from 'react';

const news = [ 
  {
    id: 1,
    title: '২০২৬ সালের এইচএসসি পরীক্ষা নিয়ে নতুন সিদ্ধান্ত। ',
    date: 'জুলাই ১০, ২০২৫',
    description: 'এইচএসসি পরীক্ষার সম্পূর্ণ রুটিন ও প্রস্তুতি গাইডলাইনের জন্য নিচের লিংকে ক্লিক করুন।',
    link: '/notice/hsc-routine-2025.pdf',
    video: 'https://www.youtube.com/embed/XWbKHy-kZc0', 
  },
  {
    id: 2,
    title: 'জাতীয় বিশ্ববিদ্যালয়ের নতুন উপাচার্য',
    date: 'জুলাই ৫, ২০২৫',
    description: 'ফর্ম পূরণের সময়সূচি প্রকাশ করা হয়েছে। সকল শিক্ষার্থীকে নির্ধারিত সময়ে ফর্ম পূরণ করার নির্দেশ দেওয়া হচ্ছে।',
    link: '/notice/form-fillup-schedule',
    video: 'https://www.youtube.com/embed/aaYlbEhT9Lk',
  },
  {
    id: 3,
    title: 'জাতীয় বিশ্ববিদ্যালয়ে নতুন করে যা ভাবতে হচ্ছে',
    date: 'জুন ২৮, ২০২৫',
    description: 'জাতীয় বিশ্ববিদ্যালয়ে নতুন করে যা ভাবতে হচ্ছে ।',
    link: '/notice/summer-break-2025',
    video: 'https://www.youtube.com/embed/bvdmasdsmxs',
  },
];

const News = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-black mb-6">News & Events</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((notice) => (
          <div
            key={notice.id}
            className="bg-white border-l-4 border-yellow-500 shadow-md p-5 rounded-md hover:shadow-lg transition duration-300"
          >
            {/* Optional: YouTube Video Embed */}
            <div className="mb-4">
              <iframe
                className="w-full h-48 rounded"
                src={notice.video}
                title={`YouTube video for ${notice.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">{notice.title}</h3>
            <p className="text-sm text-gray-600 mb-1">প্রকাশের তারিখ: {notice.date}</p>
            <p className="text-sm text-gray-700 mb-3">{notice.description}</p>
            <a
              href={notice.link}
              className="text-blue-600 hover:underline text-sm font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              বিস্তারিত পড়ুন →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
