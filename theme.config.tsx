import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  gitTimestamp: false,
  useNextSeoProps: () => {
    return { titleTemplate: `%s - Waifu.it` };
  },
  faviconGlyph: "🚧",
  banner: {
  // text: "🚧 Undergoing reconstruction 🚧",
    key: '3.0-release',
    text: (
      <a href="https://github.com/WaifuAPI/Documentation/releases/tag/3.0.4" target="_blank">
        🎉 Documentation 3.0 is released. Read more →
      </a>
    )
  },
  logo: <span>Documentation</span>,
  navbar: {
    extraContent: () => {
      return (
        <a
          href={`https://ko-fi.com/aeryk`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "24px", height: "24px", margin: "0 .5rem" }}
        >
          <svg
            width="30"
            height="25"
            viewBox="0 0 124 81"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 8C0 3.58173 3.58154 0 8 0H90V0.0977478C90.8247 0.0329895 91.6587 0 92.5 0C109.897 0 124 14.103 124 31.5C124 48.897 109.897 63 92.5 63C92.024 63 91.5504 62.9894 91.0794 62.9685C90.4969 62.9427 90 63.4007 90 63.9838V65C90 73.8365 82.8364 81 74 81H16C7.16357 81 0 73.8365 0 65V8ZM6 8C6 6.89542 6.89551 6 8 6H48H85H92C106.359 6 118 17.6406 118 32C118 46.3594 106.359 58 92 58H87C85.8954 58 85 58.8954 85 60V64C85 70.6274 79.6274 76 73 76H16C10.4771 76 6 71.5229 6 66V8Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M88 15C86.3431 15 85 16.3431 85 18V45C85 46.6569 86.3431 48 88 48H92.5C101.613 48 109 40.6127 109 31.5C109 22.3873 101.613 15 92.5 15H88ZM90.7778 20C90.3482 20 90 20.3482 90 20.7778V42.2222C90 42.6518 90.3482 43 90.7778 43H92.5C98.8513 43 104 37.8513 104 31.5C104 25.1487 98.8513 20 92.5 20H90.7778Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.8489 23.3721C19.6728 28.5482 19.6728 36.9403 24.8489 42.1164L45.5774 62.8449L45.6609 62.7615L45.7444 62.8449L66.4729 42.1164C71.649 36.9403 71.649 28.5482 66.4729 23.3721C61.2968 18.196 52.9047 18.196 47.7286 23.3721L45.6609 25.4398L43.5932 23.3721C38.4171 18.196 30.025 18.196 24.8489 23.3721Z"
            />
          </svg>
        </a>
      );
    },
  },
  project: {
    link: "https://github.com/WaifuAPI",
  },
  chat: {
    link: "https://discord.gg/yyW389c",
  },
  docsRepositoryBase: "https://github.com/WaifuAPI/Documentation/tree/production",
  footer: {
    text: (
      <span>
         AGPL-3.0 {new Date().getFullYear()} ©{' '}
        <a href="https://waifu.it" target="_blank">
          Waifu.it
        </a>
        .
      </span>
    )
  },
  head: function useHead() {
    const description =
      "A collection of documentation for each endpoints available on Waifu.it. Find out how to efficiently use the Waifu.it API here!";
    return (
      <>
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="keywords" content="anime, waifu, anime facts, anime quotes, waifu api, waifu pictures, anime api, opensource api" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
      </>
    );
  },
};

export default config;
