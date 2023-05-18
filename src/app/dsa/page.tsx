import Image from "next/image";
import * as React from "react";
import Link from "next/link";

interface Props {

}


export default function Home({ }: Props) {

    return (
       <div>
           <Link href={'/'}> <Image src={"/byorns-playground-logo.png"}  width={300} height={100}
                                              alt={'myimage'}/> </Link>
              <h3>Array</h3><br/>

           <ul>
                  <li> - Two Sum - https://leetcode.com/problems/two-sum/</li>

                  <li> - Best Time to Buy and Sell Stock - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ </li>
                  <li> - Contains Duplicate - https://leetcode.com/problems/contains-duplicate/ </li>
                  <li> - Product of Array Except Self - https://leetcode.com/problems/product-of-array-except-self/ </li>
                  <li>- Maximum Subarray - https://leetcode.com/problems/maximum-subarray/ </li>
                  <li> - Maximum Product Subarray - https://leetcode.com/problems/maximum-product-subarray/ </li>
                  <li> - Find Minimum in Rotated Sorted Array - https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/ </li>
                  <li> - Search in Rotated Sorted Array - https://leetcode.com/problems/search-in-rotated-sorted-array/ </li>
                  <li>- 3Sum - https://leetcode.com/problems/3sum/ </li>
                  <li>- Container With Most Water - https://leetcode.com/problems/container-with-most-water/ </li>
           </ul>
            <hr/>

              <h3>Binary </h3><br/>
<ul>
       <li>- Sum of Two Integers - https://leetcode.com/problems/sum-of-two-integers/ </li>
       <li>- Number of 1 Bits - https://leetcode.com/problems/number-of-1-bits/</li>
       <li>- Counting Bits - https://leetcode.com/problems/counting-bits/ </li>
       <li>- Missing Number - https://leetcode.com/problems/missing-number/ </li>
       <li>- Reverse Bits - https://leetcode.com/problems/reverse-bits/ </li>
</ul>
              <hr/>

         <h3>Dynamic Programming</h3>
<ul>
        <li> - Climbing Stairs - https://leetcode.com/problems/climbing-stairs/ </li>
      <li>- Coin Change - https://leetcode.com/problems/coin-change/</li>
       <li>  - Longest Increasing Subsequence - https://leetcode.com/problems/longest-increasing-subsequence/</li>
       <li>   - Longest Common Subsequence -</li>
       <li> - Word Break Problem - https://leetcode.com/problems/word-break/</li>
       <li>  - Combination Sum - https://leetcode.com/problems/combination-sum-iv/</li>
       <li>   - House Robber - https://leetcode.com/problems/house-robber/</li>
       <li>  - House Robber II - https://leetcode.com/problems/house-robber-ii/</li>
       <li>  - Decode Ways - https://leetcode.com/problems/decode-ways/</li>
       <li>  - Unique Paths - https://leetcode.com/problems/unique-paths/</li>
       <li>   - Jump Game - https://leetcode.com/problems/jump-game/</li>
</ul>

         <hr/>

        <h3>Graph</h3>   <br/>
           <ul>
         <li>  - Clone Graph - https://leetcode.com/problems/clone-graph/ </li>
           <li>  - Course Schedule - https://leetcode.com/problems/course-schedule/</li>
               <li> - Pacific Atlantic Water Flow - https://leetcode.com/problems/pacific-atlantic-water-flow/</li>
                   <li>  - Number of Islands - https://leetcode.com/problems/number-of-islands/</li>
                       <li>  - Longest Consecutive Sequence - https://leetcode.com/problems/longest-consecutive-sequence/</li>
                           <li>  - Alien Dictionary (Leetcode Premium) - https://leetcode.com/problems/alien-dictionary/</li>
                               <li>   - Graph Valid Tree (Leetcode Premium) - https://leetcode.com/problems/graph-valid-tree/</li>
                                   <li>   - Number of Connected Components in an Undirected Graph (Leetcode Premium) - https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/</li>

           </ul>
           <hr/>

           <h3>  Interval</h3> <br/>
           <ul>
           <li>- Insert Interval - https://leetcode.com/problems/insert-interval/ </li>
           <li>- Merge Intervals - https://leetcode.com/problems/merge-intervals/ </li>
           <li>- Non-overlapping Intervals - https://leetcode.com/problems/non-overlapping-intervals/ </li>
           <li> - Meeting Rooms (Leetcode Premium) - https://leetcode.com/problems/meeting-rooms/ </li>
           <li> - Meeting Rooms II (Leetcode Premium) - https://leetcode.com/problems/meeting-rooms-ii/ </li>
           </ul>
           <hr/>

           <h3>Linked List</h3><br/>
           <ul>
               <li> - Add Two Numbers - https://leetcode.com/problems/add-two-numbers/ </li>
           <li>- Reverse a Linked List - https://leetcode.com/problems/reverse-linked-list/ </li>
           <li> - Detect Cycle in a Linked List - https://leetcode.com/problems/linked-list-cycle/ </li>
           <li> - Merge Two Sorted Lists - https://leetcode.com/problems/merge-two-sorted-lists/ </li>
           <li>- Merge K Sorted Lists - https://leetcode.com/problems/merge-k-sorted-lists/ </li>
           <li> - Remove Nth Node From End Of List - https://leetcode.com/problems/remove-nth-node-from-end-of-list/ </li>
           <li> - Reorder List - https://leetcode.com/problems/reorder-list/ </li>
           </ul>
          <hr/>

           <h3> Matrix </h3> <br/>
           <ul>
           <li> - Set Matrix Zeroes - https://leetcode.com/problems/set-matrix-zeroes/</li>
           <li> - Spiral Matrix - https://leetcode.com/problems/spiral-matrix/ </li>
           <li> - Rotate Image - https://leetcode.com/problems/rotate-image/ </li>
           <li> Word Search - https://leetcode.com/problems/word-search/ </li>
           </ul>
          <hr/>

           <h3> String </h3>
<ul>
    <li>- Longest Substring Without Repeating Characters - https://leetcode.com/problems/longest-substring-without-repeating-characters/ </li>
    <li>- Longest Repeating Character Replacement - https://leetcode.com/problems/longest-repeating-character-replacement/ </li>
    <li>- Minimum Window Substring - https://leetcode.com/problems/minimum-window-substring/ </li>
    <li> - Valid Anagram - https://leetcode.com/problems/valid-anagram/ </li>
    <li>- Group Anagrams - https://leetcode.com/problems/group-anagrams/ </li>
    <li> - Valid Parentheses - https://leetcode.com/problems/valid-parentheses/ </li>
    <li> - Valid Palindrome - https://leetcode.com/problems/valid-palindrome/ </li>
    <li> - Longest Palindromic Substring - https://leetcode.com/problems/longest-palindromic-substring/ </li>
    <li> - Palindromic Substrings - https://leetcode.com/problems/palindromic-substrings/ </li>
    <li> - Encode and Decode Strings (Leetcode Premium) - https://leetcode.com/problems/encode-and-decode-strings/ </li>
</ul>
           <hr/>

           <h3>    Tree </h3> <br/>
<ul>
          <li> - Maximum Depth of Binary Tree - https://leetcode.com/problems/maximum-depth-of-binary-tree/</li>
    <li>   - Same Tree - https://leetcode.com/problems/same-tree/ </li>
    <li>  - Invert/Flip Binary Tree - https://leetcode.com/problems/invert-binary-tree/ </li>
    <li>   - Binary Tree Maximum Path Sum - https://leetcode.com/problems/binary-tree-maximum-path-sum/ </li>
    <li>   - Binary Tree Level Order Traversal - https://leetcode.com/problems/binary-tree-level-order-traversal/ </li>
    <li>     - Serialize and Deserialize Binary Tree - https://leetcode.com/problems/serialize-and-deserialize-binary-tree/ </li>
    <li>      - Subtree of Another Tree - https://leetcode.com/problems/subtree-of-another-tree/ </li>
    <li>       - Construct Binary Tree from Preorder and Inorder Traversal - https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/ </li>
    <li>        - Validate Binary Search Tree - https://leetcode.com/problems/validate-binary-search-tree/ </li>
    <li>       - Kth Smallest Element in a BST - https://leetcode.com/problems/kth-smallest-element-in-a-bst/</li>
    <li>         - Lowest Common Ancestor of BST - https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/ </li>
    <li>         - Implement Trie (Prefix Tree) - https://leetcode.com/problems/implement-trie-prefix-tree/ </li>
    <li>         - Add and Search Word - https://leetcode.com/problems/add-and-search-word-data-structure-design/ </li>
    <li>         - Word Search II - https://leetcode.com/problems/word-search-ii/ </li>
</ul>
       <hr/>

           <h3>     Heap</h3><br/>
<ul>
       <li>   - Merge K Sorted Lists - https://leetcode.com/problems/merge-k-sorted-lists/</li>
    <li>   - Top K Frequent Elements - https://leetcode.com/problems/top-k-frequent-elements/ </li>
    <li>         - Find Median from Data Stream - https://leetcode.com/problems/find-median-from-data-stream/ </li>
</ul>
       </div>
    )
}
