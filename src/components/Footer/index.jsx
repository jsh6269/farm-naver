const Footer = () => {
  return (
    <div id="footer">
      <ul
        className="flex text-[11px] gap-[10px] text-[#444] mt-5.5"
        style={{
          fontFamily: "돋움, Dotum, 굴림, Gulim, AppleGothic, Sans-serif",
        }}
      >
        <li>
          <a href="http://help.jr.naver.com/renew/exSelf.jsp" target="_blank">
            도움말
          </a>
        </li>
        <li>
          <a href="http://www.naver.com/rules/service.html" target="_blank">
            이용약관
          </a>
        </li>
        <li>
          <a href="http://jr.naver.com/jrservice/jr_use.html" target="_blank">
            운영원칙
          </a>
        </li>
        <li>
          <strong>
            <a href="http://www.naver.com/rules/privacy.html" target="_blank">
              개인정보취급방침
            </a>
          </strong>
        </li>
        <li>
          <a href="http://www.naver.com/rules/disclaimer.html" target="_blank">
            책임의 한계와 법적고지
          </a>
        </li>
        <li>
          <a href="http://help.jr.naver.com/renew/exMain.jsp" target="_blank">
            고객센터
          </a>
        </li>
      </ul>
      <p className="text-[10px] text-center my-2.5">
        Copyright ©
        <a
          href="http://nhncorp.com/"
          target="_blank"
          className="text-[#00535d] font-bold"
        >
          NAVER Corp.&nbsp;
        </a>
        All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
