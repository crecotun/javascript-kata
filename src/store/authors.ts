import { observable } from "mobx"
import {AuthorType} from 'types/author'

export class AuthorsStore {
  @observable authors: AuthorType[] = []

  addData(authors: AuthorType[] = []) {
    if (authors.length) {
      this.authors = authors
    }
  }
}
