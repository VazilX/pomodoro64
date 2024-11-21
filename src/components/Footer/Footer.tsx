import React from 'react';
import s from './Footer.module.scss';
import gitImg from './../../img/gitHub.svg';
import linkedInImg from './../../img/linkedIn.svg';
import emailImg from './../../img/email.svg';

export const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="#" className={`${s.link} ${s.linkGit}`}>
            <img src={gitImg} alt="git hub" className={s.img} />
            <span>Repo</span>
          </a>
        </li>
        <li className={s.item}>
          <a href="#" className={s.link}>
            <img src={linkedInImg} alt="linkedIn" className={s.img} />
          </a>
        </li>
        <li className={s.item}>
          <a href="#" className={s.link}>
            <img src={emailImg} alt="email" className={s.img} />
          </a>
        </li>
      </ul>
    </footer>
  );
};
