using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ComboManager : MonoBehaviour
{
    [SerializeField] GameObject goComboImage = null;
    [SerializeField] UnityEngine.UI.Text txtCombo = null;

    int currentCombo = 0;
    int maxCombo = 0;

    Animator myAnim;
    string animComboUp = "ComboUp";

    void Start()
    {
        myAnim = GetComponent<Animator>();
        txtCombo.gameObject.SetActive(false);
        goComboImage.SetActive(false);
    }

    // 콤보 구현
    public void IncreaseCombo(int p_num = 1)
    {
        currentCombo += p_num;
        txtCombo.text = string.Format("{0:#,##0}", currentCombo);

        if (maxCombo < currentCombo)
        {
            maxCombo = currentCombo;
        }

        if (currentCombo > 0)
        {
            txtCombo.gameObject.SetActive(true);
            goComboImage.SetActive(true);

            myAnim.SetTrigger(animComboUp);
        }
    }

    // 콤보 초기화
    public void ResetCombo()
    {
        currentCombo = 0;
        txtCombo.text = "0";
        txtCombo.gameObject.SetActive(false);
        goComboImage.SetActive(false);
    }

    // 콤보 호출
    public int GetCurrentCombo()
    {
        return currentCombo;
    }

    // 최대 콤보 호출
    public int GetMaxCombo()
    {
        return maxCombo;
    }
}
