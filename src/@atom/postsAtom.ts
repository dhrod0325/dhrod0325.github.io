import { atom } from "jotai";
import { PostType } from "@/@types";

export const postsAtom = atom<PostType[]>([]);
