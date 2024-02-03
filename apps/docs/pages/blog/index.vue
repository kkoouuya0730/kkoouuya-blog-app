<script setup lang="ts">
// TODO
const blogs = [
  {
    title: "2023 年に読んでよかった本",
    slag: "reading-book",
    thumnail: "/ozouni_shouyu_15837.webp",
    publishedAt: "2023.12.12", // Dateにする
    summary:
      "年末なので 2023 年のまとめっぽい記事を書きたくなりました。今年は 1 年間でおおよそ 300 冊の本をよんだようです（そのうち 3 割ほどはラノベなのですが...）。その中でも特に印象に残った本を紹介します。",
    tag: [
      {
        label: "React",
        color: "primary",
        isList: false,
      },
    ],
  },
  {
    title: "2023 年に読んでよかった本",
    slag: "reading-book",
    thumnail: "/ozouni_shouyu_15837.webp",
    publishedAt: "2023.12.12", // Dateにする
    summary:
      "年末なので 2023 年のまとめっぽい記事を書きたくなりました。今年は 1 年間でおおよそ 300 冊の本をよんだようです（そのうち 3 割ほどはラノベなのですが...）。その中でも特に印象に残った本を紹介します。",
    tag: [
      {
        label: "React",
        color: "primary",
        isList: false,
      },
    ],
  },
  {
    title: "2023 年に読んでよかった本",
    slag: "reading-book",
    thumnail: "/ozouni_shouyu_15837.webp",
    publishedAt: "2023.12.12", // Dateにする
    summary:
      "年末なので 2023 年のまとめっぽい記事を書きたくなりました。今年は 1 年間でおおよそ 300 冊の本をよんだようです（そのうち 3 割ほどはラノベなのですが...）。その中でも特に印象に残った本を紹介します。",
    tag: [
      {
        label: "React",
        color: "primary",
        isList: false,
      },
    ],
  },
  {
    title: "2023 年に読んでよかった本",
    slag: "reading-book",
    thumnail: "/ozouni_shouyu_15837.webp",
    publishedAt: "2023.12.12", // Dateにする
    summary:
      "年末なので 2023 年のまとめっぽい記事を書きたくなりました。今年は 1 年間でおおよそ 300 冊の本をよんだようです（そのうち 3 割ほどはラノベなのですが...）。その中でも特に印象に残った本を紹介します。",
    tag: [
      {
        label: "React",
        color: "primary",
        isList: false,
      },
    ],
  },
  {
    title: "2023 年に読んでよかった本",
    slag: "reading-book",
    thumnail: "/ozouni_shouyu_15837.webp",
    publishedAt: "2023.12.12", // Dateにする
    summary:
      "年末なので 2023 年のまとめっぽい記事を書きたくなりました。今年は 1 年間でおおよそ 300 冊の本をよんだようです（そのうち 3 割ほどはラノベなのですが...）。その中でも特に印象に残った本を紹介します。",
    tag: [
      {
        label: "React",
        color: "primary",
        isList: false,
      },
      {
        label: "React",
        color: "primary",
        isList: false,
      },
      {
        label: "React",
        color: "primary",
        isList: false,
      },
    ],
  },
];
</script>

<template>
  <div>
    <ul
      class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 px-6"
    >
      <BlogCard v-for="blogInfo in blogs" :-blog-info="blogInfo" />
    </ul>
  </div>
</template>
