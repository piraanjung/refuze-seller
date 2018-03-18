import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Sellers } from '../../models/sellers';
import { API_URL } from '../api-urls';

@Injectable()
export class FindSellersProvider {

  constructor(private http: HttpClient) { }

  getSellers() {
    return this.http.get<Sellers[]>(`${API_URL}/sellers`)
  }

  getDataForLayout1 = (): any => {
    return {
        "title": "ค้นหาสมาชิกผู้ขายขยะ",
        "description": "ทำการพิมพ์ชื่อสมาชิกเพื่อทำการค้นหา",
        "shortDescription": "35:72",
        "iconLike": "icon-thumb-up",
        "iconFavorite": "icon-heart",
        "iconShare": "icon-share-variant",
        "iconPlay": "icon-play-circle-outline",
        "items": [
            {
                "id": 1,
                "title": "Song Of Souls",
                "description": "Shawna Norman",
                "shortDescription": "3:42",
                "image": "assets/images/avatar/0.jpg",
                "iconDelate": "icon-delete",
                "iconUndo": "icon-undo-variant"
            },
            {
                "id": 2,
                "title": "Tune Of My Obsessions",
                "description": "Janice Wilder",
                "shortDescription": "3:42",
                "image": "assets/images/avatar/1.jpg",
                "iconDelate": "icon-delete",
                "iconUndo": "icon-undo-variant"
            },
            {
                "id": 3,
                "title": "Reject Her Tomorrow",
                "description": "Lucy Bender",
                "shortDescription": "3:42",
                "image": "assets/images/avatar/2.jpg",
                "iconDelate": "icon-delete",
                "iconUndo": "icon-undo-variant"
            },
            {
                "id": 4,
                "title": "Troubles Of My Blues",
                "description": "ouglas Burks",
                "shortDescription": "3:42",
                "image": "assets/images/avatar/3.jpg",
                "iconDelate": "icon-delete",
                "iconUndo": "icon-undo-variant"
            },
            {
                "id": 5,
                "title": "Broken Tonight",
                "description": "Sophia Cochran",
                "shortDescription": "3:42",
                "image": "assets/images/avatar/4.jpg",
                "iconDelate": "icon-delete",
                "iconUndo": "icon-undo-variant"
            },
            {
                "id": 6,
                "title": "Sure Choices",
                "description": "Lara Lynn",
                "shortDescription": "3:42",
                "image": "assets/images/avatar/5.jpg",
                "iconDelate": "icon-delete",
                "iconUndo": "icon-undo-variant"
            },
            {
                "id": 7,
                "title": "A Storm Is Coming",
                "description": "Juliette Medina",
                "shortDescription": "3:42",
                "image": "assets/images/avatar/6.jpg",
                "iconDelate": "icon-delete",
                "iconUndo": "icon-undo-variant"
            },
            {
                "id": 8,
                "title": "He Heard He's Crazy",
                "description": "Vanessa Ryan",
                "shortDescription": "3:42",
                "image": "assets/images/avatar/7.jpg",
                "iconDelate": "icon-delete",
                "iconUndo": "icon-undo-variant"
            }
        ]
    };
};
}
