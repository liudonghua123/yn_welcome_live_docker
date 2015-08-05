/**
 * Created by liudonghua on 7/31/15.
 */

var totalSummarySQL = "SELECT " +
    "SUM(1) ZRS ," +
    "SUM(HJZZZT_P) HJZZZT_P ," +
    "SUM(HJZZZT_NP) HJZZZT_NP ," +
    "round((SUM(HJZZZT_R) + SUM(HJZZZT_P)) * 100/(SUM(1) + 0.00001),2) HJZZZT_BDL " +
    "FROM " +
    "(" +
    "SELECT A.PCZJ, A.XSZJ, usr_yx.T_YX_PC.PCMC AS PCZJ_DISPLAY, " +
    "usr_yx.T_YX_HJ.HJZZZT, " +
    "DECODE(usr_yx.T_YX_HJ.HJZZZT, 'p', 1, 0) HJZZZT_P, " +
    "DECODE(usr_yx.T_YX_HJ.HJZZZT, 'r', 1, 0) HJZZZT_R, " +
    "DECODE(usr_yx.T_YX_HJ.HJZZZT, 'np', 1, 0) HJZZZT_NP, " +
    "usr_yx.T_YX_HJ.HJ1, " +
    "DECODE(usr_yx.T_YX_HJ.HJ1, 'p', 1, 0) HJ1_P, " +
    "DECODE(usr_yx.T_YX_HJ.HJ1, 'r', 1, 0) HJ1_R, " +
    "DECODE(usr_yx.T_YX_HJ.HJ1, 'np', 1, 0) HJ1_NP, " +
    "DECODE(usr_yx.T_YX_HJ.HJ1, 'na', 1, 0) HJ1_NA, " +
    "usr_yx.T_YX_HJ.HJ2, " +
    "DECODE(usr_yx.T_YX_HJ.HJ2, 'p', 1, 0) HJ2_P, " +
    "DECODE(usr_yx.T_YX_HJ.HJ2, 'r', 1, 0) HJ2_R, " +
    "DECODE(usr_yx.T_YX_HJ.HJ2, 'np', 1, 0) HJ2_NP, " +
    "DECODE(usr_yx.T_YX_HJ.HJ2, 'na', 1, 0) HJ2_NA, " +
    "usr_yx.T_YX_HJ.HJ3, " +
    "DECODE(usr_yx.T_YX_HJ.HJ3, 'p', 1, 0) HJ3_P, " +
    "DECODE(usr_yx.T_YX_HJ.HJ3, 'r', 1, 0) HJ3_R, " +
    "DECODE(usr_yx.T_YX_HJ.HJ3, 'np', 1, 0) HJ3_NP, " +
    "DECODE(usr_yx.T_YX_HJ.HJ3, 'na', 1, 0) HJ3_NA, " +
    "usr_yx.T_YX_HJ.HJ9, " +
    "DECODE(usr_yx.T_YX_HJ.HJ9, 'p', 1, 0) HJ9_P, " +
    "DECODE(usr_yx.T_YX_HJ.HJ9, 'r', 1, 0) HJ9_R, " +
    "DECODE(usr_yx.T_YX_HJ.HJ9, 'np', 1, 0) HJ9_NP, " +
    "DECODE(usr_yx.T_YX_HJ.HJ9, 'na', 1, 0) HJ9_NA, " +
    "usr_yx.T_YX_HJ.HJ4, " +
    "DECODE(usr_yx.T_YX_HJ.HJ4, 'p', 1, 0) HJ4_P, " +
    "DECODE(usr_yx.T_YX_HJ.HJ4, 'r', 1, 0) HJ4_R, " +
    "DECODE(usr_yx.T_YX_HJ.HJ4, 'np', 1, 0) HJ4_NP, " +
    "DECODE(usr_yx.T_YX_HJ.HJ4, 'na', 1, 0) HJ4_NA, " +
    "usr_yx.T_YX_HJ.HJ6, " +
    "DECODE(usr_yx.T_YX_HJ.HJ6, 'p', 1, 0) HJ6_P, " +
    "DECODE(usr_yx.T_YX_HJ.HJ6, 'r', 1, 0) HJ6_R, " +
    "DECODE(usr_yx.T_YX_HJ.HJ6, 'np', 1, 0) HJ6_NP, " +
    "DECODE(usr_yx.T_YX_HJ.HJ6, 'na', 1, 0) HJ6_NA, " +
    "usr_yx.T_YX_HJ.HJ5, " +
    "DECODE(usr_yx.T_YX_HJ.HJ5, 'p', 1, 0) HJ5_P, " +
    "DECODE(usr_yx.T_YX_HJ.HJ5, 'r', 1, 0) HJ5_R, " +
    "DECODE(usr_yx.T_YX_HJ.HJ5, 'np', 1, 0) HJ5_NP, " +
    "DECODE(usr_yx.T_YX_HJ.HJ5, 'na', 1, 0) HJ5_NA, " +
    "usr_yx.T_YX_HJ.HJ7, " +
    "DECODE(usr_yx.T_YX_HJ.HJ7, 'p', 1, 0) HJ7_P, " +
    "DECODE(usr_yx.T_YX_HJ.HJ7, 'r', 1, 0) HJ7_R, " +
    "DECODE(usr_yx.T_YX_HJ.HJ7, 'np', 1, 0) HJ7_NP, " +
    "DECODE(usr_yx.T_YX_HJ.HJ7, 'na', 1, 0) HJ7_NA, " +
    "(CASE WHEN usr_yx.T_YX_HJ.HJ5= 'p' AND usr_yx.T_YX_HJ.HJZZZT = 'np' THEN '1' ELSE '0' END) HJ_JFWDX " +
    " FROM usr_yx.T_YX_XSXX A" +
    " LEFT JOIN usr_yx.T_YX_PC ON A.PCZJ = usr_yx.T_YX_PC.PCZJ " +
    " LEFT JOIN usr_yx.T_YX_HJ ON A.PCZJ = usr_yx.T_YX_HJ.PCZJ  AND A.XSZJ = usr_yx.T_YX_HJ.XSZJ " +
    " WHERE A.PCZJ = '18897FC3CB511120E050CBCA3FD1099A')" +
    "GROUP BY PCZJ " +
    "ORDER BY PCZJ";

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

module.exports.totalSummarySQL = totalSummarySQL;
module.exports.undergraduateSummarySQL = undergraduateSummarySQL;
module.exports.graduateSummarySQL = graduateSummarySQL;
