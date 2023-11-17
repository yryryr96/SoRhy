using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RankManager : MonoBehaviour
{
    [SerializeField] UnityEngine.UI.Text txtScore = null;
    [SerializeField] int increaseScore = 1000;
    int currentScore = 0;

    [SerializeField] float[] weight = null;  // 판정별 점수

    TimingManager theTimingManager;

    // Start is called before the first frame update
    void Start()
    {
        currentScore = 0;
        txtScore.text = "0";
    }
}
