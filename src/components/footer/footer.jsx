import React from "react";
import localFont from "next/font/local";
import "./footer.css";

const myFont = localFont({ src: "./../../../public/fonts/PingFang.ttf" });

const Footer = () => {
  return (
    <div className={`download-footer ${myFont.className}`}>
      <div className="footer-con">
        <div className="link">
          <ul>
            <li>
              <a
                rel="external nofollow"
                target="_blank"
                href="https://arena.5eplay.com/page/about"
              >
                {" "}
                关于5EPlay
              </a>
            </li>
            <li>
              <a
                rel="external nofollow"
                target="_blank"
                href="https://arena.5eplay.com/page/contact"
              >
                {" "}
                联系我们
              </a>
            </li>
            <li>
              <a
                rel="external nofollow"
                target="_blank"
                href="https://arena.5eplay.com/page/contact"
              >
                {" "}
                商务合作
              </a>
            </li>
            <li>
              <a
                rel="external nofollow"
                target="_blank"
                href="https://arena.5eplay.com/page/agreement"
              >
                服务条款
              </a>
            </li>
            <li>
              <a
                rel="external nofollow"
                target="_blank"
                href="https://arena.5eplay.com/page/privacy"
              >
                个人信息保护政策
              </a>
            </li>
            <li>
              <a
                rel="external nofollow"
                target="_blank"
                href="https://arena.5eplay.com/page/privacyguidelines"
              >
                个人信息保护指引
              </a>
            </li>
            <li>
              <a
                rel="external nofollow"
                target="_blank"
                href="https://arena.5eplay.com/page/link"
              >
                {" "}
                友情链接
              </a>
            </li>
            <li>
              <a
                rel="external nofollow"
                target="_blank"
                href="https://arena.5eplay.com/page/team"
              >
                加入我们
              </a>
            </li>
          </ul>
        </div>
        <p className="tcenter">
          本平台适合年满17岁以上的用户使用：为了您的健康，请合理控制游戏时间
        </p>
        <div className="tcenter">
          <div className="copyright">
            ©2011-2024 咸宁市志帆科技有限公司
            <a target="_blank" href="https://beian.miit.gov.cn">
              鄂ICP备2027543019279号-3
            </a>
            <a
              target="_blank"
              className="beian-link"
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602010488"
            >
              鄂公网安备4212054636202000498号
            </a>
            <a
              target="_blank"
              className="beian-link"
              href="https://oss.5eplay.com/images/licence/5e_licence-1.png"
            >
              营业执照
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
