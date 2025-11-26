'use client'

import {
    createFileTree,
    Directory,
    ToggleFileTree,
} from 'react-toggle-file-tree';
import { MouseEventHandler, useEffect, useState } from "react";


const FileTree = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/dir_tree?dir=sample1', {
                    mode: 'no-cors',
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();

    }, [])

    const list = [
        {
            localPath: '/',
            fileName: 'inch.txt',
            properties: {
                size: '1 bit',
                anything: 'possible',
                a: 'b',
            },
        },
        {
            localPath: '/fruit',
            fileName: 'apple.docs',
            properties: {
                sizezz: '12mb',
                azvv: 'asdfasd',
            },
        },
        {
            localPath: '/fruit',
            fileName: 'banana.png',
            properties: {
                sizezz: '12mb',
                azvv: 'asdfasd',
            },
        },
        {
            localPath: '/vehicle/car',
            fileName: 'truck.pdf',
            properties: {
                sizezz: '12mb',
                azvv: 'asdfasd',
            },
        },
        {
            localPath: '/vehicle/car',
            fileName: 'taxi.ppt',
            properties: {
                sizezz: '12mb',
                azvv: 'asdfasd',
            },
        },
        {
            localPath: '/plant/tree',
            fileName: 'oak.json',
            properties: {
                sizezz: '10mb',
                azvv: 'asdfasd',
            },
        },
        {
            localPath: '/plant/tree',
            fileName: 'maple.zip',
            properties: {
                sizezz: '8mb',
                azvv: 'asdfasd',
            },
        },
        {
            localPath: '/plant/flower',
            fileName: 'cherry-blossom.numbers',
            properties: {
                sizezz: '5mb',
                azvv: 'asdfasd',
            },
        },
        {
            localPath: '/plant/fruit',
            fileName: 'apple-tree.csv',
            properties: {
                sizezz: '15mb',
                azvv: 'asdfasd',
            },
        },
    ];

    const handleDirectoryClick: MouseEventHandler<HTMLDivElement> = (event) => { }
    const handleFileClick: MouseEventHandler<HTMLDivElement> = (event) => { }

    if (!isMounted) {
        return null;
    }

    return <div>FileTreei

        <ToggleFileTree
            list={createFileTree(list) as Directory}
            handleFileClick={handleFileClick}
            handleDirectoryClick={handleDirectoryClick}
        />
    </div>
}

export default FileTree;