import { t } from 'i18next';
import React from 'react';
import Like from './Like';
export default function Tarot() {
    return (
        <>
            <div className="tarot-frame">
                <figure>
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-gradient-on-gray-background-image_557021.jpg" />
                    <figcaption>{t('first_layout')}</figcaption>
                </figure>
                <figure>
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-gradient-on-gray-background-image_557021.jpg" />
                    <figcaption>{t('second_layout')}</figcaption>
                </figure>
                <figure>
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-gradient-on-gray-background-image_557021.jpg" />
                    <figcaption>{t('third_layout')}</figcaption>
                </figure>
                <figure>
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-gradient-on-gray-background-image_557021.jpg" />
                    <figcaption>{t('fourth_layout')}</figcaption>
                </figure>
            </div>
            <Like></Like>
        </>
    );






}