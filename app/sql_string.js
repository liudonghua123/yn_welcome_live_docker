/**
 * Created by liudonghua on 7/31/15.
 */

var totalUndergraduateSummarySQL =  "SELECT " +
    " SUM(1) ZRS , " +
    " SUM(HJZZZT_P) HJZZZT_P , " +
    " SUM(HJZZZT_NP) HJZZZT_NP , " +
    " round((SUM(HJZZZT_R) + SUM(HJZZZT_P)) * 100/(SUM(1) + 0.00001),2) HJZZZT_BDL " +
    " FROM " +
    " ( " +
    " SELECT A.PCZJ, A.XSZJ, T_YX_PC.PCMC AS PCZJ_DISPLAY, " +
    " T_YX_HJ.HJZZZT, " +
    " DECODE(T_YX_HJ.HJZZZT, 'p', 1, 0) HJZZZT_P, " +
    " DECODE(T_YX_HJ.HJZZZT, 'r', 1, 0) HJZZZT_R, " +
    " DECODE(T_YX_HJ.HJZZZT, 'np', 1, 0) HJZZZT_NP " +
    " FROM usr_yx.T_YX_XSXX A" +
    " LEFT JOIN usr_yx.T_YX_PC ON A.PCZJ = usr_yx.T_YX_PC.PCZJ " +
    " LEFT JOIN usr_yx.T_YX_HJ ON A.PCZJ = usr_yx.T_YX_HJ.PCZJ  AND A.XSZJ = usr_yx.T_YX_HJ.XSZJ " +
    " WHERE A.PCZJ = '18897FC3CB511120E050CBCA3FD1099A')" +
    " GROUP BY PCZJ " +
    " ORDER BY PCZJ";

var totalGraduateSummarySQL =  "SELECT " +
    " SUM(1) ZRS , " +
    " SUM(HJZZZT_P) HJZZZT_P , " +
    " SUM(HJZZZT_NP) HJZZZT_NP , " +
    " round((SUM(HJZZZT_R) + SUM(HJZZZT_P)) * 100/(SUM(1) + 0.00001),2) HJZZZT_BDL " +
    " FROM " +
    " ( " +
    " SELECT A.PCZJ, A.XSZJ, T_YX_PC.PCMC AS PCZJ_DISPLAY, " +
    " T_YX_HJ.HJZZZT, " +
    " DECODE(T_YX_HJ.HJZZZT, 'p', 1, 0) HJZZZT_P, " +
    " DECODE(T_YX_HJ.HJZZZT, 'r', 1, 0) HJZZZT_R, " +
    " DECODE(T_YX_HJ.HJZZZT, 'np', 1, 0) HJZZZT_NP " +
    " FROM usr_yx.T_YX_XSXX A" +
    " LEFT JOIN usr_yx.T_YX_PC ON A.PCZJ = usr_yx.T_YX_PC.PCZJ " +
    " LEFT JOIN usr_yx.T_YX_HJ ON A.PCZJ = usr_yx.T_YX_HJ.PCZJ  AND A.XSZJ = usr_yx.T_YX_HJ.XSZJ " +
    " WHERE A.PCZJ = '1A7E06986CD30B7EE050CBCA3FD120D8')" +
    " GROUP BY PCZJ " +
    " ORDER BY PCZJ";

var totalDoctorSummarySQL =  "SELECT " +
    " SUM(1) ZRS , " +
    " SUM(HJZZZT_P) HJZZZT_P , " +
    " SUM(HJZZZT_NP) HJZZZT_NP , " +
    " round((SUM(HJZZZT_R) + SUM(HJZZZT_P)) * 100/(SUM(1) + 0.00001),2) HJZZZT_BDL " +
    " FROM " +
    " ( " +
    " SELECT A.PCZJ, A.XSZJ, T_YX_PC.PCMC AS PCZJ_DISPLAY, " +
    " T_YX_HJ.HJZZZT, " +
    " DECODE(T_YX_HJ.HJZZZT, 'p', 1, 0) HJZZZT_P, " +
    " DECODE(T_YX_HJ.HJZZZT, 'r', 1, 0) HJZZZT_R, " +
    " DECODE(T_YX_HJ.HJZZZT, 'np', 1, 0) HJZZZT_NP " +
    " FROM usr_yx.T_YX_XSXX A" +
    " LEFT JOIN usr_yx.T_YX_PC ON A.PCZJ = usr_yx.T_YX_PC.PCZJ " +
    " LEFT JOIN usr_yx.T_YX_HJ ON A.PCZJ = usr_yx.T_YX_HJ.PCZJ  AND A.XSZJ = usr_yx.T_YX_HJ.XSZJ " +
    " WHERE A.PCZJ = '1CB5BBFFC324768CE050CBCA3FD1E3DA')" +
    " GROUP BY PCZJ " +
    " ORDER BY PCZJ";

var undergraduateSummarySQL = "SELECT DWDM_DISPLAY,   " +
    " SUM(1) ZRS ,     " +
    " SUM(HJZZZT_P) HJZZZT_P ,    " +
    " SUM(HJZZZT_NP) HJZZZT_NP ,  " +
    " round((SUM(HJZZZT_R) + SUM(HJZZZT_P)) * 100/(SUM(1) + 0.00001),2) HJZZZT_BDL   " +
    " FROM " +
    " ( " +
    " SELECT A.PCZJ, A.XSZJ, T_YX_PC.PCMC AS PCZJ_DISPLAY, " +
    " A.DWDM, BM0.DWBZMC AS DWDM_DISPLAY, " +
    " T_YX_HJ.HJZZZT, " +
    " DECODE(T_YX_HJ.HJZZZT, 'p', 1, 0) HJZZZT_P, " +
    " DECODE(T_YX_HJ.HJZZZT, 'r', 1, 0) HJZZZT_R, " +
    " DECODE(T_YX_HJ.HJZZZT, 'np', 1, 0) HJZZZT_NP " +
    " FROM usr_yx.T_YX_XSXX A" +
    " LEFT JOIN usr_yx.T_YX_PC T_YX_PC ON A.PCZJ = T_YX_PC.PCZJ " +
    " LEFT JOIN usr_yx.T_URP_DW  BM0 ON A.DWDM = BM0.DWDM" +
    " LEFT JOIN usr_yx.T_YX_HJ T_YX_HJ ON A.PCZJ = T_YX_HJ.PCZJ  AND A.XSZJ = T_YX_HJ.XSZJ " +
    " WHERE A.PCZJ = '18897FC3CB511120E050CBCA3FD1099A')" +
    " GROUP BY PCZJ ,DWDM, DWDM_DISPLAY" +
    " ORDER BY PCZJ ,DWDM, DWDM_DISPLAY";

var graduateSummarySQL = "SELECT DWDM_DISPLAY,   " +
    " SUM(1) ZRS ,     " +
    " SUM(HJZZZT_P) HJZZZT_P ,    " +
    " SUM(HJZZZT_NP) HJZZZT_NP ,  " +
    " round((SUM(HJZZZT_R) + SUM(HJZZZT_P)) * 100/(SUM(1) + 0.00001),2) HJZZZT_BDL   " +
    " FROM " +
    " ( " +
    " SELECT A.PCZJ, A.XSZJ, T_YX_PC.PCMC AS PCZJ_DISPLAY, " +
    " A.DWDM, BM0.DWBZMC AS DWDM_DISPLAY, " +
    " T_YX_HJ.HJZZZT, " +
    " DECODE(T_YX_HJ.HJZZZT, 'p', 1, 0) HJZZZT_P, " +
    " DECODE(T_YX_HJ.HJZZZT, 'r', 1, 0) HJZZZT_R, " +
    " DECODE(T_YX_HJ.HJZZZT, 'np', 1, 0) HJZZZT_NP " +
    " FROM usr_yx.T_YX_XSXX A" +
    " LEFT JOIN usr_yx.T_YX_PC T_YX_PC ON A.PCZJ = T_YX_PC.PCZJ " +
    " LEFT JOIN usr_yx.T_URP_DW  BM0 ON A.DWDM = BM0.DWDM" +
    " LEFT JOIN usr_yx.T_YX_HJ T_YX_HJ ON A.PCZJ = T_YX_HJ.PCZJ  AND A.XSZJ = T_YX_HJ.XSZJ " +
    " WHERE A.PCZJ = '1A7E06986CD30B7EE050CBCA3FD120D8')" +
    " GROUP BY PCZJ ,DWDM, DWDM_DISPLAY" +
    " ORDER BY PCZJ ,DWDM, DWDM_DISPLAY";

var doctorSummarySQL = "SELECT DWDM_DISPLAY,   " +
    " SUM(1) ZRS ,     " +
    " SUM(HJZZZT_P) HJZZZT_P ,    " +
    " SUM(HJZZZT_NP) HJZZZT_NP ,  " +
    " round((SUM(HJZZZT_R) + SUM(HJZZZT_P)) * 100/(SUM(1) + 0.00001),2) HJZZZT_BDL   " +
    " FROM " +
    " ( " +
    " SELECT A.PCZJ, A.XSZJ, T_YX_PC.PCMC AS PCZJ_DISPLAY, " +
    " A.DWDM, BM0.DWBZMC AS DWDM_DISPLAY, " +
    " T_YX_HJ.HJZZZT, " +
    " DECODE(T_YX_HJ.HJZZZT, 'p', 1, 0) HJZZZT_P, " +
    " DECODE(T_YX_HJ.HJZZZT, 'r', 1, 0) HJZZZT_R, " +
    " DECODE(T_YX_HJ.HJZZZT, 'np', 1, 0) HJZZZT_NP " +
    " FROM usr_yx.T_YX_XSXX A" +
    " LEFT JOIN usr_yx.T_YX_PC T_YX_PC ON A.PCZJ = T_YX_PC.PCZJ " +
    " LEFT JOIN usr_yx.T_URP_DW  BM0 ON A.DWDM = BM0.DWDM" +
    " LEFT JOIN usr_yx.T_YX_HJ T_YX_HJ ON A.PCZJ = T_YX_HJ.PCZJ  AND A.XSZJ = T_YX_HJ.XSZJ " +
    " WHERE A.PCZJ = '1CB5BBFFC324768CE050CBCA3FD1E3DA')" +
    " GROUP BY PCZJ ,DWDM, DWDM_DISPLAY" +
    " ORDER BY PCZJ ,DWDM, DWDM_DISPLAY";

module.exports.totalUndergraduateSummarySQL = totalUndergraduateSummarySQL;
module.exports.totalGraduateSummarySQL = totalGraduateSummarySQL;
module.exports.totalDoctorSummarySQL = totalDoctorSummarySQL;

module.exports.undergraduateSummarySQL = undergraduateSummarySQL;
module.exports.graduateSummarySQL = graduateSummarySQL;
module.exports.doctorSummarySQL = doctorSummarySQL;
