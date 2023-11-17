using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Result : MonoBehaviour
{

    [SerializeField] Text[] txtCount = null;
    [SerializeField] Text txtMaxCombo = null;
    [SerializeField] Text txtScore = null;

    ScoreManager theScoreManager;
    TimingManager theTimingManager;
    ComboManager theComboManager;

    // Start is called before the first frame update
    void Start()
    {
        theScoreManager = FindObjectOfType<ScoreManager>();
        theTimingManager = FindObjectOfType<TimingManager>();
        theComboManager = FindObjectOfType<ComboManager>();
    }

    public void ShowResult()
    {
        for (int i = 0; i < txtCount.Length; i++)
        {
            txtCount[i].text = "0";
        }

        txtScore.text = "0";
        txtMaxCombo.text = "0";

        int[] t_judgement = theTimingManager.GetJudgementRecord();
        int t_currentScore = theScoreManager.GetCurrentScore();
        int t_maxCombo = theComboManager.GetMaxCombo();
        for (int i = 0; i < txtCount.Length; i++)
        {
            txtCount[i].text = string.Format("{0:#,##0}", t_judgement[i]);
        }

        txtScore.text = string.Format("{0:#,##0}", t_currentScore);
        txtMaxCombo.text = string.Format("{0:#,##0}", t_maxCombo);
    }
}
