import { atom } from "jotai";
import { PostType } from "@/@types";

export const postAtom = atom<PostType[]>([]);
