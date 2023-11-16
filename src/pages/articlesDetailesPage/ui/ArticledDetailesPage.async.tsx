import React from "react"

export const ArticledDetailesPage =  React.lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailesPage')), 1500);
}));

export default ArticledDetailesPage